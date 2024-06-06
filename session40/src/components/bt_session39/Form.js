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
const Form = ({ addTask, editTask, updateTask }) => {
    const [taskName, setTaskName] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (editTask) {
            setTaskName(editTask.name);
        }
        else {
            setTaskName('');
        }
    }, [editTask]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) {
            alert('Tên công việc không được để trống');
            return;
        }
        const newTask = {
            id: editTask ? editTask.id : new Date().getTime(),
            name: taskName,
            completed: editTask ? editTask.completed : false,
        };
        if (editTask) {
            updateTask(newTask);
        }
        else {
            addTask(newTask);
        }
        setTaskName('');
    };
    return (<form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
      <div className="form-outline flex-fill">
        <input type="text" id="taskName" className="form-control" placeholder="Nhập tên công việc" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      </div>
      <button type="submit" className="btn ms-2 btn-info">
        {editTask ? 'Sửa' : 'Thêm'}
      </button>
    </form>);
};
exports.default = Form;
