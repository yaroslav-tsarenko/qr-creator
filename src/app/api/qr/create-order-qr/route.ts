import { NextRequest, NextResponse } from "next/server";
import { qrController } from "@/backend/controllers/qr.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        const body = await req.json();
        const { userId, email, prompt, response, tokens } = body;

        if (!tokens || tokens <= 0) {
            return NextResponse.json({ message: "Invalid token amount." }, { status: 400 });
        }

        const order = await qrController.createOrderQR(userId, email, prompt, response, tokens);
        return NextResponse.json({ order }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { message: err.message || "Failed to create QR order" },
            { status: 400 }
        );
    }
}
