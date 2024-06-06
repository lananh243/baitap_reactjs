"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const B_1 = __importDefault(require("./B"));
// interface Props {
//     name: string
// }
function A() {
    return (<div>
        A
        <B_1.default></B_1.default>
    </div>);
}
exports.default = A;
