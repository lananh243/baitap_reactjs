"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Child_1 = __importDefault(require("./Child"));
function Parent(props) {
    return (<div>Parent
      <p>Xin chào {props.a} năm nay tôi {props.b} tuổi </p>

      <Child_1.default></Child_1.default>
    </div>);
}
exports.default = Parent;
