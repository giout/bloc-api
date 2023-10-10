import { Router } from 'express'
import controller from '../controllers/folders.controller'

const router = Router()

router.route('/')
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

router.route('/user/:id')
    .get(controller.getAllByUser)

export default router