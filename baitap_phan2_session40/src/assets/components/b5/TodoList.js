"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function TodoList(props) {
    return (<div>
        <ul>
        {props.todos.map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>
    </div>);
}
exports.default = TodoList;
