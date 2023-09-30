import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import { connection } from './config/database.js'
import router from './routes/index.js'

const app = express() // aplicacion
const port = process.env.PORT

// middlewares
app.use(cors())
app.use(express.json())
app.use('/', router)

// conectando a base de datos
connection()
    .then(() => {
        console.log('Connected.')
    })

app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`)
})
