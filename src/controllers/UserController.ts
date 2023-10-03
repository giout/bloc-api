import MongoService from "./MongoService";
import UserDocument from "../types/users";
import { Request, Response } from "express";

class UserController extends MongoService<UserDocument> {}

export default UserController