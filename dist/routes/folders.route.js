"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const folders_controller_1 = __importDefault(require("../controllers/folders.controller"));
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
// ruta protegida
router.use(auth_1.authentication);
router.route('/')
    .post(folders_controller_1.default.createEntry);
router.route('/:id')
    .put(folders_controller_1.default.updateEntry)
    .delete(folders_controller_1.default.deleteEntry);
router.route('/user')
    .get(folders_controller_1.default.getAllByUser);
exports.default = router;
