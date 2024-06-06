"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const A_1 = __importDefault(require("./A"));
function UseContext() {
    return (<div>UseContext
        {/*
            Đây là 1 hook ?
            giải quyết
         */}
         <A_1.default></A_1.default>
    </div>);
}
exports.default = UseContext;
