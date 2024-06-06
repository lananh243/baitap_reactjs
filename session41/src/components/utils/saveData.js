"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = void 0;
const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
exports.saveData = saveData;
