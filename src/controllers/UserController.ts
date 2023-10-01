import MongoService from "./MongoService";
import UserDocument from "../types/users";
import { Request, Response } from "express";

class UserController extends MongoService<UserDocument> {
    public getTreeViewData(req: Request, res: Response) {
        this.handleHttp(req, res, async () => {
            
        })
    }
}

export default UserController