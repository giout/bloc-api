import { Schema, model } from 'mongoose'

const Folder = model('Folder', new Schema({
    title: {
        type: String,
        required: true
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

export default Folder