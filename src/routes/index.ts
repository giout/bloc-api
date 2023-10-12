import { Router } from 'express'
import userRouter from './users.route'
import folderRouter from './folders.route'
import noteRouter from './notes.route'
import authRouter from './auth.route'

const router = Router()

// autenticacion de usuarios
router.use('/auth', authRouter)

// rutas protegidas
router.use('/users', userRouter)
router.use('/folders', folderRouter)
router.use('/notes', noteRouter)

export default router