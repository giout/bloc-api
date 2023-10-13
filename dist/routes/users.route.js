"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
// ruta protegida
router.use(auth_1.authentication);
router.route('/')
    .get(users_controller_1.default.getUser)
    .put(users_controller_1.default.updateUser)
    .delete(users_controller_1.default.deleteUser);
exports.default = router;
