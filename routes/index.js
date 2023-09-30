import { Router } from 'express'
import userRouter from './users.js'
import folderRouter from './folders.js'
import noteRouter from './notes.js'

const router = new Router()

router.use('/users', userRouter)
router.use('/folders', folderRouter)
router.use('/notes', noteRouter)

export default router