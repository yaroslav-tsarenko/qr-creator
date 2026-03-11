import { User } from "../models/user.model";

export const userService = {
    async getById(userId: string) {
        const user = await User.findById(userId);
        if (!user) throw new Error("UserNotFound");
        return user;
    },

    async addTokens(userId: string, amount: number) {
        const user = await this.getById(userId);
        user.tokens = (user.tokens || 0) + amount;
        await user.save();
        return user;
    },
};
