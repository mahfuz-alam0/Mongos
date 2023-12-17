import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserDB = async (data: IUser): Promise<IUser> => {

    const user = new User(data);

    await user.save();
    return user;
};

export const getUsersDB = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.error("Error getting user:", error);
    }
};


