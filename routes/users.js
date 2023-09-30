import { getUsers, createUser, deleteUser, updateUser } from '../controllers/users.js'
import { Router } from 'express'

const router = new Router()

router.route('/').get(getUsers).post(createUser)
router.route('/:id').put(updateUser).delete(deleteUser)

export default router