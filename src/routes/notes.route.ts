import { Router } from 'express'
import controller from '../controllers/notes.controller'

const router = Router()

router.route('/')
    .post(controller.createEntry)

router.route('/:id')
    .get(controller.getEntryById)
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

router.route('/folder/:id')
    .get(controller.getAllByFolder)

export default router