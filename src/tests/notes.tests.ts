import 'dotenv/config'
import mongoose from 'mongoose'
import app from "../config/app"
import request from "supertest"

beforeAll( async() => {
    await mongoose.connect(<string> process.env.DB_URI)
})

describe('', () => {
    it('', async() => {

    })
})

afterAll( async() => {
    await mongoose.disconnect()
})