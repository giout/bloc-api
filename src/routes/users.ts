import { Router } from 'express'
import MongoService from '../controllers/MongoService'
import User from '../models/User'

const router = Router()
const controller = new MongoService(User)

router.route('/').get(controller.getAllEntries)

export default router