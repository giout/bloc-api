import { Schema, model } from 'mongoose'

const Note = model('Note', new Schema({
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