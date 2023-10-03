import { Router } from 'express'
import FolderController from '../controllers/FolderController'
import Folder from '../models/Folder'

const router = Router()
const controller = new FolderController(Folder)

router.route('/')
    .get(controller.getAllEntries)
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default router