import MongoService from "./MongoService"
import FolderDocument from "../types/folders"
import Folder from "../models/Folder"

class FolderController extends MongoService<FolderDocument> {}

const controller = new FolderController(Folder)

export default controller