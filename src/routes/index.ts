import { Router } from 'express'
import userRouter from './users'
import folderRouter from './folders'
import noteRouter from './notes'

const router = Router()

router.use('/users', userRouter)
router.use('/folders', folderRouter)
router.use('/notes', noteRouter)

export default router