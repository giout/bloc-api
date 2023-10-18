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
exports.AuthController = void 0;
require("dotenv/config");
const bcrypt_1 = require("../utils/bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CustomError_1 = __importDefault(require("../error/CustomError"));
const signature = process.env.TOKEN_SIGNATURE;
class AuthController {
    constructor(model) {
        this.signUp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { username, email, password } = req.body;
                if (username && email && password) {
                    const user = yield this.userModel.findOne({ email });
                    if (!user) {
                        this.validateEmail(email);
                        this.validatePassword(password);
                        req.body.password = (0, bcrypt_1.encrypt)(password, 10);
                        const entry = yield this.userModel.create(req.body);
                        return res.status(201).json(entry);
                    }
                    throw new CustomError_1.default('El usuario ya existe', 400);
                }
                throw new CustomError_1.default('Todos los campos deben llenarse', 400);
            }
            catch (error) {
                next(error);
            }
        });
        this.logIn = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // verificando si usuario existe
                const { email, password } = req.body;
                if (email && password) {
                    const user = yield this.userModel.findOne({ email });
                    if (user) {
                        const { _id } = user;
                        // verificadno si la clave concuerda
                        if ((0, bcrypt_1.compareCrypted)(password, user.password)) {
                            const payload = { id: _id };
                            // creando y enviando token de autenticacion
                            const token = jsonwebtoken_1.default.sign(payload, signature, {
                                expiresIn: 60 * 60 * 24 * 7 // 7 dias
                            });
                            res.status(200).json({ token });
                        }
                    }
                    throw new CustomError_1.default('Email o clave invalida', 400);
                }
                throw new CustomError_1.default('Todos los campos deben llenarse', 400);
            }
            catch (error) {
                next(error);
            }
        });
        this.userModel = model;
    }
    validateEmail(email) {
        const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
        if (regex.test(email))
            return;
        throw new CustomError_1.default('La direccion de email no es valida.', 400);
    }
    validatePassword(password) {
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        if (regex.test(password))
            return;
        throw new CustomError_1.default('La clave debe tener 8 caracteres, letras y numeros', 400);
    }
}
exports.AuthController = AuthController;
