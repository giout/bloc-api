import { Router } from 'express'
import controller from '../controllers/users.controller'
import { authentication } from '../middlewares/auth'

const router = Router()

// ruta protegida
router.use(authentication)

router.route('/')
    .get(controller.getUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser)

export default router