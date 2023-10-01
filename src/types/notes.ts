import { Document, ObjectId } from 'mongoose'

interface NoteDocument extends Document{
    title: string,
    content: string,
    userId: ObjectId,
    folderId: ObjectId
}

export default NoteDocument