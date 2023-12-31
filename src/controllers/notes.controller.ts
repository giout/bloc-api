import MongoController from "./MongoController"
import NoteDocument from "../types/notes"
import { Request, Response, NextFunction } from "express"
import Note from "../models/Note"

class NoteController extends MongoController<NoteDocument> {
    public getAllByFolder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const notes = await this.model.find({ folderId: req.params.id })
            res.status(200).json(notes)
        } catch (err) {
            next(err)
        }
    }
}

const controller = new NoteController(Note)

export default controller