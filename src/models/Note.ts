import { Schema, model } from 'mongoose'
import NoteDocument from '../types/notes'

const Note = model<NoteDocument>('Note', new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    folderId: {
        type: Schema.Types.ObjectId,
        ref: 'Folder',
        required: true
    }
}, { versionKey: false }))

export default Note