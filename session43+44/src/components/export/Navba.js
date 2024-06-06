"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Navba() {
    return (<div>
        <div className=" w-full bg-[#fcfcfc] text-black h-14 px-6">
            <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-5">
                <b>Add new post</b>
                <span className="flex items-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">add</span>
                Add Content
                </span>
                <span className="flex items-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">settings</span>
                Settings
                </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-black h-9 px-2 rounded">
                <input type="text" placeholder="Search content..." className="outline-none"/>
                <span className="material-symbols-outlined cursor-pointer">search</span>
            </div>
            </div>
        </div>
    </div>);
}
exports.default = Navba;
