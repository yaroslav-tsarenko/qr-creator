export type UserRole = "user" | "admin";

export interface IUserAddress {
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface IUser {
    _id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: IUserAddress;
    role: UserRole;
    tokens: number | null;
    createdAt: string;
    updatedAt: string;
}

export type Nullable<T> = T | null;

export interface UserResponse {
    user: IUser;
}
