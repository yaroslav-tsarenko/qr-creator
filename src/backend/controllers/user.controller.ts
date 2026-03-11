import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { sendEmail } from "@/backend/utils/sendEmail";
import { Transaction } from "../models/transaction.model";
import { generateInvoicePdfBase64 } from "@/backend/utils/invoicePdf";

type PaymentMeta = {
    currency?: string;
    paymentAmount?: number;
    referenceId?: string;
    packageName?: string;
};

function toUserType(user: Awaited<ReturnType<typeof userService.getById>>): UserType {
    return {
        _id: user._id.toString(),
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth,
        address: {
            street: user.address?.street ?? "",
            city: user.address?.city ?? "",
            country: user.address?.country ?? "",
            postalCode: user.address?.postalCode ?? "",
        },
        role: user.role,
        tokens: user.tokens,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}

export const userController = {
    async buyTokens(userId: string, amount: number, payment?: PaymentMeta): Promise<UserType> {
        await connectDB();

        if (payment?.referenceId) {
            const existing = await Transaction.findOne({ referenceId: payment.referenceId });
            if (existing) {
                const existingUser = await userService.getById(userId);
                return toUserType(existingUser);
            }
        }

        const user = await userService.addTokens(userId, amount);

        await Transaction.create({
            userId: user._id,
            email: user.email,
            amount,
            type: "add",
            currency: payment?.currency,
            paymentAmount: payment?.paymentAmount,
            referenceId: payment?.referenceId,
            packageName: payment?.packageName,
        });

        try {
            const attachments =
                payment?.referenceId && payment?.currency && Number.isFinite(payment.paymentAmount)
                    ? [
                        {
                            filename: `invoice-${payment.referenceId}.pdf`,
                            content: await generateInvoicePdfBase64({
                                invoiceNumber: `INV-${payment.referenceId}`,
                                issueDate: new Date(),
                                referenceId: payment.referenceId,
                                packageName: payment.packageName || "Token Package",
                                tokens: amount,
                                paymentAmount: Number(payment.paymentAmount),
                                currency: payment.currency,
                                customerName: user.name,
                                customerEmail: user.email,
                                customerPhone: user.phone,
                                customerAddress: user.address ?? {},
                            }),
                            encoding: "base64" as const,
                        },
                    ]
                    : undefined;

            await sendEmail(
                user.email,
                payment?.referenceId ? `Payment confirmed - ${payment.referenceId}` : "Tokens Purchased",
                `You have successfully purchased ${amount} tokens. Your new balance is ${user.tokens} tokens.`,
                `
                    <p>Hello ${user.firstName || user.name},</p>
                    <p>Your payment was completed successfully.</p>
                    <p>You have purchased <strong>${amount} tokens</strong>. Your new balance is <strong>${user.tokens} tokens</strong>.</p>
                    ${payment?.referenceId ? `<p>Payment reference: <strong>${payment.referenceId}</strong></p>` : ""}
                    <p>Your PDF invoice is attached to this email.</p>
                `,
                attachments
            );
        } catch (error) {
            console.error("Failed to send post-payment email", error);
        }

        return toUserType(user);
    },
};
