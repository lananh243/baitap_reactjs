"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const btn_primary = "primary";
const btn_danger = "danger";
const btn_success = "success";
const btn_warning = "warning";
const btn_large = "big";
const btn_small = "small";
function Button({ title, type, size, onClick }) {
    return (<div>
        <button onClick={onClick} className={`btn btn-${type === btn_primary
            ? btn_primary
            : type === btn_danger
                ? btn_danger
                : type === btn_success
                    ? btn_success
                    : btn_warning} btn-${size === btn_large ? btn_large : btn_small}`}>{title}</button>
    </div>);
}
exports.default = Button;
