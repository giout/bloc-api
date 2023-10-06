import express from 'express'
import cors from 'cors'
import router from '../routes'

const app = express() // aplicacion

// middlewares
app.use(cors())
app.use(express.json())
app.use('/', router)

export default app