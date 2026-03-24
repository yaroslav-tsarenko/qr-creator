import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { userController } from "@/backend/controllers/user.controller";

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const { amount } = await req.json();

        if (!amount || amount <= 0) {
            return NextResponse.json({ message: "Invalid token amount" }, { status: 400 });
        }

        if (amount < 1000) {
            return NextResponse.json({ message: "Minimum purchase is 1000 tokens (£10)" }, { status: 400 });
        }

        const user = await userController.buyTokens(payload.sub, amount);
        return NextResponse.json({ user });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
