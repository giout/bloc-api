"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoController_1 = __importDefault(require("./MongoController"));
const Folder_1 = __importDefault(require("../models/Folder"));
class FolderController extends MongoController_1.default {
    constructor() {
        super(...arguments);
        this.getAllByUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const folders = yield Folder_1.default.find({ userId: user.id });
                res.status(200).json(folders);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
const controller = new FolderController(Folder_1.default);
exports.default = controller;
