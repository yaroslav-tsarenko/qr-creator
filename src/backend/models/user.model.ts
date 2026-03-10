import mongoose, { Schema, Model } from "mongoose";
import { IUserSchema } from "@/backend/types/user.types";

const UserSchema: Schema<IUserSchema> = new Schema(
    {
        name: { type: String, required: true, trim: true },
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, index: true },
        phone: { type: String, required: true, trim: true },
        dateOfBirth: { type: String, required: true },
        address: {
            street: { type: String, required: true, trim: true },
            city: { type: String, required: true, trim: true },
            country: { type: String, required: true, trim: true },
            postalCode: { type: String, required: true, trim: true },
        },
        password: { type: String, required: true, select: false },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        tokens: { type: Number, default: 10 }
    },
    { timestamps: true }
);

export const User: Model<IUserSchema> =
    mongoose.models.User || mongoose.model<IUserSchema>("User", UserSchema);
