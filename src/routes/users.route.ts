import { Router } from 'express'
import controller from '../controllers/users.controller'

const router = Router()

router.route('/')
    .get(controller.getAllEntries) // eliminar despues
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default router