import MongoService from "./MongoService"
import NoteDocument from "../types/notes"
import { Request, Response } from "express"
import Note from "../models/Note"

class NoteController extends MongoService<NoteDocument> {
    public getAllByFolder = async (req: Request, res: Response): Promise<void> => {
        this.handleHttp(req, res, async () => {
            const notes = await Note.find({ folderId: req.params.id })
            res.status(200).json(notes)
        })
    }
}

const controller = new NoteController(Note)

export default controller