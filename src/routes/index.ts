import { Router } from 'express'
import userRouter from './users.route'
import folderRouter from './folders.route'
import noteRouter from './notes.route'
import authRouter from './auth.route'

// las operaciones aun no estan 100% definidas

const router = Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/folders', folderRouter)
router.use('/notes', noteRouter)

export default router