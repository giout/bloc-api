import { Router } from 'express'
import NoteController from '../controllers/NoteController'
import Note from '../models/Note'

const router = Router()
const controller = new NoteController(Note)

router.route('/')
    .get(controller.getAllEntries) // eliminar despues
    .post(controller.createEntry)

router.route('/:id')
    .get(controller.getEntryById)
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

router.route('/folder/:id')
    .get(controller.getAllByFolder)

export default router