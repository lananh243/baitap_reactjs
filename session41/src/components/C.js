"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const D_1 = __importDefault(require("./D"));
function C() {
    return (<div>C
        <D_1.default></D_1.default>
        {/* name={props.name} */}
    </div>);
}
exports.default = C;
