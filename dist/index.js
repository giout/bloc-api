"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./config/app"));
const port = process.env.PORT;
(0, database_1.connection)().then(() => console.log('Connected.')); // conectando a base de datos
app_1.default.listen(port, () => console.log('Listening on port', port));
