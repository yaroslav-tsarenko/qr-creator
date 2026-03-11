import mongoose, { Schema, Document } from "mongoose";

export interface TransactionDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    amount: number;
    type: "add" | "spend";
    currency?: string;
    paymentAmount?: number;
    referenceId?: string;
    packageName?: string;
    createdAt: Date;
}

const transactionSchema = new Schema<TransactionDocument>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["add", "spend"], required: true },
    currency: { type: String, trim: true },
    paymentAmount: { type: Number },
    referenceId: { type: String, trim: true, unique: true, sparse: true },
    packageName: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
});

export const Transaction =
    mongoose.models.Transaction || mongoose.model<TransactionDocument>("Transaction", transactionSchema);
