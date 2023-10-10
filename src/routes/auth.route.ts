import { Router } from "express"
import { AuthController } from "../controllers/AuthController"
import User from "../models/User"

const controller = new AuthController(User)

const router = Router()

router.post('/signup', controller.signUp)
router.post('/login', controller.logIn)

export default router