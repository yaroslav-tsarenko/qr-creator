import { NextResponse } from "next/server";
import { ordersController } from "@/backend/controllers/orders.controller";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await ordersController.sendPDF(body);
        return NextResponse.json({ success: true, result });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
