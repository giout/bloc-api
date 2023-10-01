import { Document, ObjectId } from 'mongoose'

interface FolderDocument extends Document {
    title: string,
    userId: ObjectId,
    folderId: ObjectId
}

export default FolderDocument