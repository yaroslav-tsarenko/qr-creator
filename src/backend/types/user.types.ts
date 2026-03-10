import { Document, Types } from "mongoose";

export interface UserAddress {
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface IUserSchema extends Document {
    _id: Types.ObjectId;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: UserAddress;
    password: string;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}

export interface UserType {
    _id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: UserAddress;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}
