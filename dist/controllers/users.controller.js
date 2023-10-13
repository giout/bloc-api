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
const User_1 = __importDefault(require("../models/User"));
class UserController extends MongoController_1.default {
    constructor() {
        super(...arguments);
        this.getUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.user;
                yield this.verifyExistence(payload.id);
                const user = yield User_1.default.findById(payload.id);
                res.status(200).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const payload = req.user;
                yield this.verifyExistence(payload.id);
                const entry = yield this.model.findByIdAndUpdate(payload.id, body);
                res.status(200).json(entry);
            }
            catch (err) {
                next(err);
            }
        });
        this.deleteUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.user;
                yield this.verifyExistence(payload.id);
                yield this.model.findByIdAndDelete(payload.id);
                res.status(200).end();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
const controller = new UserController(User_1.default);
exports.default = controller;
