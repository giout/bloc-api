import express from 'express'
import cors from 'cors'
import router from '../routes'
import { errorHandler } from '../middlewares/error'

const app = express() // aplicacion

// middlewares
app.use(cors())
app.use(express.json())
app.use('/', router)
app.use(errorHandler)

export default app