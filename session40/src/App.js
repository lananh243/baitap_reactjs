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
const Header_1 = __importDefault(require("./components/bt_session39/Header"));
const Form_1 = __importDefault(require("./components/bt_session39/Form"));
const List_1 = __importDefault(require("./components/bt_session39/List"));
const Tab_1 = __importDefault(require("./components/bt_session39/Tab"));
const Modal_1 = __importDefault(require("./components/bt_session39/Modal"));
require("./index.css");
const App = () => {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [editTask, setEditTask] = (0, react_1.useState)(null);
    const [activeTab, setActiveTab] = (0, react_1.useState)('all');
    const [showDeleteModal, setShowDeleteModal] = (0, react_1.useState)(false);
    const [taskToDelete, setTaskToDelete] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        setEditTask(null);
    };
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
        setShowDeleteModal(false);
    };
    const confirmDeleteTask = () => {
        if (taskToDelete) {
            deleteTask(taskToDelete.id);
            setTaskToDelete(null);
        }
    };
    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task => task.id === taskId ? Object.assign(Object.assign({}, task), { completed: !task.completed }) : task));
    };
    return (<div>
      <Header_1.default />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <Form_1.default addTask={addTask} editTask={editTask} updateTask={updateTask}/>
                  <Tab_1.default activeTab={activeTab} setActiveTab={setActiveTab}/>
                  <List_1.default tasks={tasks} setEditTask={setEditTask} deleteTask={(task) => {
            setTaskToDelete(task);
            setShowDeleteModal(true);
        }} toggleTaskCompletion={toggleTaskCompletion} activeTab={activeTab}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showDeleteModal && taskToDelete && (<Modal_1.default title="Xác nhận xóa" message={`Bạn chắc chắn muốn xóa công việc "${taskToDelete.name}"?`} confirmAction={confirmDeleteTask} cancelAction={() => {
                setShowDeleteModal(false);
                setTaskToDelete(null);
            }}/>)}
    </div>);
};
exports.default = App;
