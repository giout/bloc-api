import { Router } from 'express'
import controller from '../controllers/users.controller'
import { authentication } from '../middlewares/auth'
authentication

const router = Router()

router.route('/')
    .get(authentication, controller.getUser)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default router