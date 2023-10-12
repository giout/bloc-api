"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Note = (0, mongoose_1.model)('Note', new mongoose_1.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    folderId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Folder',
        required: true
    }
}, { versionKey: false }));
exports.default = Note;
