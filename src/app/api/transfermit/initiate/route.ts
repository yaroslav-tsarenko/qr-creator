import { NextResponse } from "next/server";

export const runtime = "nodejs";

function env(name: string): string {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env ${name}`);
    return v.trim();
}

function getBaseUrl(): string {
    // Prefer server-only base URL when available.
    const base = (process.env.APP_URL || process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_FRONTEND_URL || "").trim();
    if (!base) throw new Error("Missing env APP_URL (preferred) or NEXT_PUBLIC_SITE_URL/NEXT_PUBLIC_FRONTEND_URL");
    return base.replace(/\/$/, "");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // ─────────────────────────────────────
        // 1️⃣ Parse & normalize input
        // ─────────────────────────────────────
        const rawAmount = Number(body.amount);
        const amount = Number.isFinite(rawAmount) ? Number(rawAmount.toFixed(2)) : NaN;
        const currency = String(body.currency || "EUR").toUpperCase();
        const tokens = Number(body.tokens);
        const user = body.user;

        const allowedCurrencies = ["EUR", "GBP", "USD", "AUD", "NZD"];

        // ─────────────────────────────────────
        // 2️⃣ Validation
        // ─────────────────────────────────────
        if (!allowedCurrencies.includes(currency)) {
            return NextResponse.json({ error: "unsupported_currency" }, { status: 422 });
        }

        // Minimum amount (configure if needed; default 10 in selected currency)
        if (!Number.isFinite(amount) || amount < 10) {
            return NextResponse.json({ error: "min_amount_10" }, { status: 422 });
        }

        if (!Number.isFinite(tokens) || tokens <= 0) {
            return NextResponse.json({ error: "invalid_tokens" }, { status: 422 });
        }

        if (!user?.id || !user?.email) {
            return NextResponse.json({ error: "user_required" }, { status: 401 });
        }

        // ─────────────────────────────────────
        // 3️⃣ Build references
        // ─────────────────────────────────────
        const ref = `CS-${user.id}-${Date.now()}`;
        const base = getBaseUrl();

        // ─────────────────────────────────────
        // 4️⃣ Transfermit payload
        // ─────────────────────────────────────
        const payload = {
            referenceId: ref,
            paymentType: "DEPOSIT",

            amount,
            currency,

            description: `Top-up ${tokens} tokens`,

            successReturnUrl: `${base}/payment/success`,
            declineReturnUrl: `${base}/payment/decline`,
            pendingReturnUrl: `${base}/payment/pending`,
            returnUrl: `${base}/payment/pending`,

            webhookUrl: `${base}/api/transfermit/webhook`,
            websiteUrl: base,

            customer: {
                referenceId: `user_${user.id}`,
                email: user.email,
                locale: "en",
            },

            additionalParameters: {
                user_id: String(user.id),
                tokens: Number(tokens),
                reference_id: ref,
            },
        };

        // Avoid logging full payload (contains PII). Reference is safe.
        console.log("[TM INIT]", { referenceId: ref, amount, currency, tokens });

        // ─────────────────────────────────────
        // 5️⃣ Call Transfermit
        // ─────────────────────────────────────
        const res = await fetch(`${env("TRANSFERMIT_API_URL")}/payments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${env("TRANSFERMIT_API_KEY")}`,
            },
            body: JSON.stringify(payload),
        });

        const json = await res.json().catch(() => ({}));

        if (!res.ok) {
            console.error("[TM INIT ERROR]", { referenceId: ref, status: res.status, body: json });
            return NextResponse.json({ error: "transfermit_error", details: json }, { status: res.status });
        }

        const redirectUrl = json?.result?.redirectUrl;

        if (!redirectUrl) {
            return NextResponse.json({ error: "missing_redirect_url", details: json }, { status: 500 });
        }

        // ─────────────────────────────────────
        // 6️⃣ Success
        // ─────────────────────────────────────
        return NextResponse.json({ redirectUrl, referenceId: ref });
    } catch (e: any) {
        console.error("[TM INIT FATAL]", e);
        return NextResponse.json({ error: e.message ?? "internal_error" }, { status: 500 });
    }
}
