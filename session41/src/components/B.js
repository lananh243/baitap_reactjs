"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const C_1 = __importDefault(require("./C"));
// interface Props {
//     name : string
// }
function B() {
    return (<div>
        B
        <C_1.default></C_1.default>
        {/* name={props.name} */}
    </div>);
}
exports.default = B;
