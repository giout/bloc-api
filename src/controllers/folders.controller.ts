import MongoController from "./MongoController"
import FolderDocument from "../types/folders"
import Folder from "../models/Folder"
import { Request, Response, NextFunction } from "express"
import { AuthRequest } from "../types/auth"
import { JwtPayload } from "jsonwebtoken"

class FolderController extends MongoController<FolderDocument> {
    getAllByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = <JwtPayload> (req as AuthRequest).user
            const folders = await this.model.find({ userId: user.id })
            res.status(200).json(folders)
        } catch (err) {
            next(err)
        }
    }
}

const controller = new FolderController(Folder)

export default controller