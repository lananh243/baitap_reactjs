"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Input({ type, placeholder, style, onChange }) {
    return (<>
        <input style={style} type={type} className="form-control" placeholder={placeholder} onChange={onChange}/>
    </>);
}
exports.default = Input;
