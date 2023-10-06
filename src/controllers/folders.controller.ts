import MongoService from "./MongoService"
import FolderDocument from "../types/folders"
import Folder from "../models/Folder"
import { Request, Response } from "express"

class FolderController extends MongoService<FolderDocument> {
    getAllFoldersByUser = async (req: Request, res: Response): Promise<void> => {
        this.handleHttp(req, res, async () => {
            const folders = await Folder.find({ userId: req.params.id })
            res.status(200).json(folders)
        })
    }
}

const controller = new FolderController(Folder)

export default controller