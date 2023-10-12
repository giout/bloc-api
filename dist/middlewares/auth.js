"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CustomError_1 = __importDefault(require("../error/CustomError"));
const signature = process.env.TOKEN_SIGNATURE;
const authentication = (req, res, next) => {
    const auth = req.headers['authorization'] || '';
    // Esquema de autenticacion Bearer token
    try {
        if (auth.toLowerCase().startsWith('bearer') &&
            auth.split(' ').length === 2) {
            const token = auth.split(' ')[1]; // Bearer[0] jf8jf8rf9ff4[1]
            // Verificando que el token sea valido
            jsonwebtoken_1.default.verify(token, signature, (err, decoded) => {
                if (err) {
                    throw new CustomError_1.default('Session is invalid', 401);
                }
                // Asignando datos del token a objeto Request
                req.user = decoded;
            });
            return next();
        }
        else {
            throw new CustomError_1.default('Invalid Bearer token', 400);
        }
    }
    catch (error) {
        next(error);
    }
};
exports.authentication = authentication;
