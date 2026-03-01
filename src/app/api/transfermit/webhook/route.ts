// app/api/transfermit/webhook/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";
import { userController } from "@/backend/controllers/user.controller";

export const runtime = "nodejs";

function env(name: string) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env ${name}`);
    return v;
}

function timingSafeEqualHex(aHex: string, bHex: string) {
    const a = Buffer.from(aHex, "hex");
    const b = Buffer.from(bHex, "hex");
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
}

function verify(raw: string, signature: string) {
    if (!signature) return false;

    const hash = crypto
        .createHmac("sha256", env("TRANSFERMIT_SIGNING_KEY"))
        .update(raw)
        .digest("hex");

    return timingSafeEqualHex(hash, signature);
}

export async function POST(req: Request) {
    const raw = await req.text();

    // Transfermit header name may vary by config; accept a few common variants.
    const signature =
        req.headers.get("signature") ||
        req.headers.get("x-signature") ||
        req.headers.get("x-transfermit-signature") ||
        "";

    if (!verify(raw, signature)) {
        return new NextResponse("invalid_signature", { status: 401 });
    }

    const payload = JSON.parse(raw);
    const payment = payload.result ?? payload;

    const state = payment.state as string | undefined; // COMPLETED | DECLINED | PENDING

    const additional = payment.additionalParameters ?? {};
    const userId = additional.user_id ?? additional.userId;
    const tokens = Number(additional.tokens);
    const referenceId = payment.referenceId ?? additional.reference_id;

    console.log("[TM WEBHOOK]", { referenceId, state, userId, tokens });

    // Only credit on completed payments.
    if (state === "COMPLETED") {
        if (!userId || !Number.isFinite(tokens) || tokens <= 0) {
            return new NextResponse("invalid_additional_parameters", { status: 400 });
        }

        await userController.buyTokens(String(userId), tokens);
    }

    // For PENDING/DECLINED we just acknowledge.
    return new NextResponse("ok", { status: 200 });
}
