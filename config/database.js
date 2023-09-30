import 'dotenv/config'
import { connect } from 'mongoose'

export async function connection() {
    const uri = process.env.DB_URI
    await connect(uri)
}