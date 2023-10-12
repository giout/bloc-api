import { Router } from 'express'
import controller from '../controllers/folders.controller'
import { authentication } from '../middlewares/auth'

const router = Router()

// ruta protegida
router.use(authentication)

router.route('/')
    .post(controller.createEntry)

router.route('/:id')
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

router.route('/user')
    .get(controller.getAllByUser)

export default router