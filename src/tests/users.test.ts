import 'dotenv/config'
import mongoose from 'mongoose'
import app from "../config/app"
import request from "supertest"

const url = '/users'

beforeAll( async() => {
    await mongoose.connect(<string> process.env.DB_URI)
})

describe('Usuarios', () => {
    it('Crea un usuario', async() => {
        const body = {
            "username": "av2003", 
            "firstName": "Andrea",
            "lastName": "Villasmil",
            "password": "1234",
            "email": "andrea@gmail.com"
        }
        const response = await request(app).post(url).send(body)
        
        expect(response.statusCode).toBe(201)
    })
})

afterAll( async() => {
    await mongoose.disconnect()
})