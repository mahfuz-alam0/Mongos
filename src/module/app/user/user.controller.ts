import { NextFunction, Request, Response } from "express";
import { createUserDB, getUsersDB } from "./user.service";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const data = req.body;

    const user = await createUserDB(data);
    res.status(200).json({
        status: "success",
        user: user
    });
}

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = await getUsersDB();
    res.status(200).json({
        status: 'success',
        user: user,
    });
};