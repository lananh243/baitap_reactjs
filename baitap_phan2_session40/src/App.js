"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CountValue_1 = __importDefault(require("./assets/components/b1/CountValue"));
const UserList_1 = __importDefault(require("./assets/components/b2/UserList"));
const ColorPicker_1 = __importDefault(require("./assets/components/b3/ColorPicker"));
const RandomNumberGenerator_1 = __importDefault(require("./assets/components/b4/RandomNumberGenerator"));
const TodoList_1 = __importDefault(require("./assets/components/b5/TodoList"));
const LoginForm_1 = __importDefault(require("./assets/components/b6/LoginForm"));
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    const handleClick = (0, react_1.useCallback)(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    const [color, setColor] = (0, react_1.useState)('black');
    const handleChangeColor = (0, react_1.useCallback)((e) => {
        setColor(e.target.value);
    }, []);
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [newTodo, setNewTodo] = (0, react_1.useState)('');
    const handleAddTodo = () => {
        if (newTodo.length > 0) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };
    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };
    return (<div>
      <CountValue_1.default count={count}></CountValue_1.default>
      <button onClick={handleClick}>Increate</button>
      <UserList_1.default></UserList_1.default>

      <h1>Bài 3</h1>
      <b>Màu người dùng chọn</b>
      <input type="color" onChange={handleChangeColor}/>
      <ColorPicker_1.default color={color}></ColorPicker_1.default>
      <RandomNumberGenerator_1.default></RandomNumberGenerator_1.default>

      <h1>Bài 5</h1>
      <input type="text" value={newTodo} onChange={handleInputChange}/>
      <button onClick={handleAddTodo}>Add</button>
      <TodoList_1.default todos={todos}></TodoList_1.default>
      <LoginForm_1.default></LoginForm_1.default>
    </div>);
}
exports.default = App;
