"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Item = ({ task, setEditTask, openModal, deleteTask }) => {
    const handleEdit = () => {
        setEditTask(task);
    };
    const handleDelete = () => {
        openModal('Xác nhận', `Bạn chắc chắn muốn xóa công việc "${task.name}"?`, () => {
            deleteTask(task);
        });
    };
    const toggleComplete = () => {
        // Thực hiện chuyển trạng thái công việc
    };
    return (<li className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" style={{ backgroundColor: '#f4f6f7' }}>
      <div>
        <input className="form-check-input me-2" type="checkbox" checked={task.completed} onChange={toggleComplete}/>
        <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      </div>
      <div className="d-flex gap-3">
        <i className="fas fa-pen-to-square text-warning" onClick={handleEdit}/>
        <i className="far fa-trash-can text-danger" onClick={handleDelete}/>
      </div>
    </li>);
};
exports.default = Item;
