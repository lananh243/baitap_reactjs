"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai3() {
    return (<div>
        <h1>Bài 3</h1>
        <div className='flex gap-5'>
            <div className='w-[200px] h-[200px] bg-sky-500 rounded-full'></div>
            <div className='w-[200px] h-[200px] bg-red-500 rounded-full'></div>
            <div className='w-[200px] h-[200px] bg-green-500 rounded-full'></div>
        </div>
    </div>);
}
exports.default = Bai3;
