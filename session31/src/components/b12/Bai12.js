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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TodoList = () => {
    const [todos, setTodos] = (0, react_1.useState)([
        { id: 1, title: 'Code', completed: false },
        { id: 2, title: 'Quét nhà', completed: false },
        { id: 3, title: 'Giặt quần áo', completed: false },
        { id: 4, title: 'Lau nhà', completed: false }
    ]);
    const [newTodo, setNewTodo] = (0, react_1.useState)('');
    const [isModalOpen, setModalOpen] = (0, react_1.useState)(false);
    const [currentTodo, setCurrentTodo] = (0, react_1.useState)(null);
    const addTodo = () => {
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        setTodos([...todos, { id: newId, title: newTodo, completed: false }]);
        setNewTodo('');
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const toggleCompletion = (id) => {
        const updatedTodos = todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo);
        setTodos(updatedTodos);
    };
    const openModal = (todo) => {
        setCurrentTodo(todo);
        setModalOpen(true);
    };
    const saveTodo = () => {
        if (currentTodo) {
            const updatedTodos = todos.map(todo => todo.id === currentTodo.id ? Object.assign({}, currentTodo) : todo);
            setTodos(updatedTodos);
            setModalOpen(false);
        }
    };
    const allCompleted = todos.every(todo => todo.completed);
    return (<div className="container">
      <h1>Danh sách công việc</h1>
      <div className="inputContainer">
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Nhập tên công việc" className="input"/>
        <button onClick={addTodo} className="addButton">Thêm</button>
      </div>
      <ul className="list">
        {todos.map(todo => (<li key={todo.id} className={`todoItem ${todo.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleCompletion(todo.id)} className="checkbox"/>
            <span className="todoText">{todo.title}</span>
            <div className="buttonContainer">
              <button onClick={() => openModal(todo)} className="editButton">Sửa</button>
              <button onClick={() => deleteTodo(todo.id)} className="deleteButton">Xóa</button>
            </div>
          </li>))}
      </ul>
      {isModalOpen && currentTodo && (<div className="modal">
          <input type="text" value={currentTodo.title} onChange={(e) => setCurrentTodo(Object.assign(Object.assign({}, currentTodo), { title: e.target.value }))} className="modalInput"/>
          <button onClick={saveTodo} className="saveButton">Lưu</button>
          <button onClick={() => setModalOpen(false)} className="closeButton">Đóng</button>
        </div>)}
      <div className="completionStatus">
        {todos.filter(todo => todo.completed).length} / {todos.length} công việc đã hoàn thành
      </div>
      {allCompleted && <div className="allCompletedNotification">Hoàn thành công việc</div>}
    </div>);
};
exports.default = TodoList;
