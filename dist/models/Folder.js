"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Folder = (0, mongoose_1.model)('Folder', new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AuthUser',
        required: true
    }
}, { versionKey: false }));
exports.default = Folder;
