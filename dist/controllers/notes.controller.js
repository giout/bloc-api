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
const Note_1 = __importDefault(require("../models/Note"));
class NoteController extends MongoController_1.default {
    constructor() {
        super(...arguments);
        this.getAllByFolder = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield Note_1.default.find({ folderId: req.params.id });
                res.status(200).json(notes);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
const controller = new NoteController(Note_1.default);
exports.default = controller;
