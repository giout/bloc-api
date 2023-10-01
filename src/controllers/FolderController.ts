import MongoService from "./MongoService";
import FolderDocument from "../types/folders";

class FolderController extends MongoService<FolderDocument> {}

export default FolderController