import { Schema, model } from 'mongoose'
import NoteDocument from '../types/notes'

const Note = model<NoteDocument>('Note', new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    folderId: {
        type: Schema.Types.ObjectId,
        ref: 'Folder'
    }
}, { versionKey: false }))

export default Note