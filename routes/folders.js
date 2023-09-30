import { Router } from 'express'
import { getFolders, getFolderById, createFolder, updateFolder, deleteFolder } from '../controllers/folders.js'

const router = new Router()

router.route('/').get(getFolders).post(createFolder)
router.route('/:id').get(getFolderById).put(updateFolder).delete(deleteFolder)

export default router