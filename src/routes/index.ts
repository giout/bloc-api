import { Router } from 'express'
import userRouter from './users.route'
import folderRouter from './folders.route'
import noteRouter from './notes.route'

const router = Router()

router.use('/users', userRouter)
router.use('/folders', folderRouter)
router.use('/notes', noteRouter)

export default router