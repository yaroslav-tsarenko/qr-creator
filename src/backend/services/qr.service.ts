import { AiOrder } from "@/backend/models/aiOrder.model";
import { User } from "@/backend/models/user.model";
import { Transaction } from "@/backend/models/transaction.model";
import { sendEmail } from "@/backend/utils/sendEmail";

export const qrService = {
    async processQROrder(userId: string, email: string, prompt: string, response: string, tokens: number) {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");
        if (user.tokens < tokens) throw new Error("Insufficient tokens");

        user.tokens -= tokens;
        await user.save();

        await Transaction.create({
            userId,
            email,
            amount: tokens,
            type: "spend",
            paymentMethod: "tokens",
        });

        const order = await AiOrder.create({
            userId,
            email,
            prompt,
            response,
        });

        await sendEmail(
            email,
            "QR Order Completed",
            `Your QR code order has been completed and ${tokens} tokens have been deducted.`
        );

        return order;
    },
};
