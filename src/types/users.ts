import { Document } from 'mongoose'

interface UserDocument extends Document {
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    email: string
}

export default UserDocument