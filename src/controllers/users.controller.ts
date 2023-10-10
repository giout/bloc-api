import MongoService from "./MongoService"
import UserDocument from "../types/users"
import User from "../models/User"

class UserController extends MongoService<UserDocument> { }

const controller = new UserController(User)

export default controller