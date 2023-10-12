"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const User_1 = __importDefault(require("../models/User"));
const controller = new AuthController_1.AuthController(User_1.default);
const router = (0, express_1.Router)();
router.post('/signup', controller.signUp);
router.post('/login', controller.logIn);
exports.default = router;
