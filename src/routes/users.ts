import { Router } from 'express'
import UserController from '../controllers/UserController'
import User from '../models/User'

const router = Router()
const controller = new UserController(User)

router.route('/')
    .get(controller.getAllEntries) // eliminar despues
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default router