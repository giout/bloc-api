import MongoService from "./MongoService"
import FolderDocument from "../types/folders"
import Folder from "../models/Folder"
import { Request, Response, NextFunction } from "express"

class FolderController extends MongoService<FolderDocument> {
    getAllByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const folders = await Folder.find({ userId: req.params.id })
            res.status(200).json(folders)
        } catch (err) {
            next(err)
        }
    }
}

const controller = new FolderController(Folder)

export default controller