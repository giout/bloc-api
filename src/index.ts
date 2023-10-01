import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connection } from './config/database'
import router from './routes'

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

app.listen(port, () => {
    console.log('Listening on port', port)
})
