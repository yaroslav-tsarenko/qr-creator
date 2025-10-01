import mongoose, { Schema, Document } from "mongoose";

export interface TransactionDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    amount: number;
    type: "add" | "spend";
    createdAt: Date;
}

const transactionSchema = new Schema<TransactionDocument>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["add", "spend"], required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Transaction =
    mongoose.models.Transaction || mongoose.model<TransactionDocument>("Transaction", transactionSchema);
