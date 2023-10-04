import { Router } from 'express'
import controller from '../controllers/folders.controller'

const router = Router()

router.route('/')
    .get(controller.getAllEntries)
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default router