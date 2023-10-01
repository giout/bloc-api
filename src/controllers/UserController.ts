import MongoService from "./MongoService";
import UserDocument from "../types/users";

class UserController extends MongoService<UserDocument> {}

export default UserController