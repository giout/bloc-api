import { Schema, model } from 'mongoose'
import FolderDocument from '../types/folders'

const Folder = model<FolderDocument>('Folder', new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { versionKey: false }))

export default Folder