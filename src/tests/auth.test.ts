import 'dotenv/config'
import mongoose from 'mongoose'
import app from "../config/app"
import request from "supertest"

beforeAll( async() => {
    await mongoose.connect(<string> process.env.DB_URI)
})

describe('Autenticacion', () => {
    it('Registro', async() => {
        const url = '/auth/signup'
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

    it('Inicio de sesion', async() => {
        const url = '/auth/login'
        const body = {
            "email": "andrea@gmail.com",
            "password": "1234"
        }
        const response = await request(app).post(url).send(body)
        expect(response.statusCode).toBe(200)
    })
})

afterAll( async() => {
    await mongoose.disconnect()
})