"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_route_1 = __importDefault(require("./users.route"));
const folders_route_1 = __importDefault(require("./folders.route"));
const notes_route_1 = __importDefault(require("./notes.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const router = (0, express_1.Router)();
// autenticacion de usuarios
router.use('/auth', auth_route_1.default);
// rutas protegidas
router.use('/users', users_route_1.default);
router.use('/folders', folders_route_1.default);
router.use('/notes', notes_route_1.default);
exports.default = router;
