import MongoService from "./MongoService"
import { AuthRequest, UserDocument } from "../types/auth"
import User from "../models/User"
import { Request, Response, NextFunction } from "express"

class UserController extends MongoService<UserDocument> {
    public getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = (req as AuthRequest).user
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
}

const controller = new UserController(User)

export default controller