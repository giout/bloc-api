import { Router } from 'express'
import controller from '../controllers/notes.controller'

const router = Router()

// rutas protegidas
router.route('/')
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

router.route('/folder/:id')
    .get(controller.getAllByFolder)

export default router