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
const CustomError_1 = __importDefault(require("../error/CustomError"));
class MongoController {
    constructor(model) {
        this.getAllEntries = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const entries = yield this.model.find();
                res.status(200).json(entries);
            }
            catch (err) {
                next(err);
            }
        });
        this.getEntryById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.verifyExistence(id);
                const entry = yield this.model.findById(id);
                res.status(200).json(entry);
            }
            catch (err) {
                next(err);
            }
        });
        this.createEntry = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield this.model.create(req.body);
                res.status(201).json(document);
            }
            catch (err) {
                next(err);
            }
        });
        this.updateEntry = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { params, body } = req;
                yield this.verifyExistence(params.id);
                const entry = yield this.model.findByIdAndUpdate(params.id, body);
                res.status(200).json(entry);
            }
            catch (err) {
                next(err);
            }
        });
        this.deleteEntry = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.verifyExistence(id);
                yield this.model.findByIdAndDelete(id);
                res.status(200).end();
            }
            catch (err) {
                next(err);
            }
        });
        this.verifyExistence = (id) => __awaiter(this, void 0, void 0, function* () {
            const entry = yield this.model.findById(id);
            if (!entry) {
                throw new CustomError_1.default('Recurso no obtenido', 404);
            }
        });
        this.model = model;
    }
}
exports.default = MongoController;
