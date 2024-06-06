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
const Form_1 = __importDefault(require("../base/Form"));
const StudentItem_1 = __importDefault(require("./StudentItem"));
const Button_1 = __importDefault(require("../base/Button"));
const Input_1 = __importDefault(require("../base/Input"));
const Modal_1 = __importDefault(require("../base/Modal"));
const saveData_1 = require("../utils/saveData");
function ListStudent() {
    const [showForm, setShowForm] = (0, react_1.useState)(false);
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const [idDelete, setIdDelete] = (0, react_1.useState)(0);
    const [nameDelete, setNameDelete] = (0, react_1.useState)("");
    const [showModalToggle, setShowModalToggle] = (0, react_1.useState)(false);
    const [idToggle, setIdToggle] = (0, react_1.useState)(0);
    // state lưu trữ danh sách nhân viên
    const [employeeList, setEmpoyeeList] = (0, react_1.useState)(() => {
        const employeeLocal = localStorage.getItem("students");
        return employeeLocal ? JSON.parse(employeeLocal) : [];
    });
    // Hàm hiển thị form 
    const handleShowForm = () => {
        // Cập nhật trạng thái của state showForm
        setShowForm(true);
    };
    // Hàm đóng form 
    const handleCloseForm = () => {
        // Cập nhật trạng thái của state showForm
        setShowForm(false);
    };
    const handleSearch = () => {
        console.log("Search");
    };
    // Hàm hiển thị modal xác nhận xóa
    const handleShowModal = (id) => {
        // Cập nhật lại state của showModal
        setIdDelete(id);
        setShowModal(true);
        // tìm kiếm thông tin nhân viên của nv cần xóa
        const findEmployee = employeeList.find((employee) => {
            return employee.id === id;
        });
        if (findEmployee) {
            // cập nhật tên của nhân viên cần xóa
            setNameDelete(findEmployee === null || findEmployee === void 0 ? void 0 : findEmployee.employeeName);
        }
    };
    // Ẩn modal xác nhận xóa
    const handleCloseModal = () => {
        setShowModal(false);
    };
    // Hàm xóa thông tin 1 nhân viên khỏi local
    const handleDeleteEmployee = () => {
        // Lọc ra những nv khác với id cần xóa
        const filterEmployee = employeeList.filter((employee) => {
            return employee.id !== idDelete;
        });
        // lưu mảng vừa lặp lên local
        (0, saveData_1.saveData)("students", filterEmployee);
        // Đóng modal
        setShowModal(false);
        // Render lại danh sách nv
        setEmpoyeeList(filterEmployee);
    };
    // Hàm mở modal xác nhận chặn
    const handleShowModalToggle = (id) => {
        // Cập nhật trạng thái mở modal
        setShowModalToggle(true);
        // cập nhật state để lấy id cần cập nhật
        setIdToggle(id);
    };
    return (<>
        {
        // show ? <Form/> : <></>
        // showForm === true ? <Form/> : <></>
        showForm && <Form_1.default onClose={handleCloseForm}/>}
        {/* Component modal xác nhận xóa*/}
        {showModal && <Modal_1.default title='Xác nhận' content={`Bạn có muốn xóa nhân viên ${nameDelete} không ?`} onClose={handleCloseModal} onConfirm={handleDeleteEmployee}></Modal_1.default>}
        {/* Component xác nhận chặn */}
        {showModalToggle && <Modal_1.default></Modal_1.default>}
        {/* Link font awesome end*/}
        <div className="w-[80%] m-auto mt-4 h-[100vh]">
            <main className="main">
            <header className="d-flex justify-content-between mb-3">
                <h3>Nhân viên</h3>
                <Button_1.default onClick={handleShowForm} title='Thêm mới nhân viên' type='primary' size='small'></Button_1.default>
            </header>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <Input_1.default style={{ width: 350 }} type="text" placeholder="Tìm kiếm theo tên" onChange={handleSearch}/>
                <i className="fa-solid fa-arrows-rotate" title="Refresh"/>
            </div>
            {/* Danh sách nhân viên */}
            <table className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Trạng thái</th>
                    <th colSpan={3}>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                    {employeeList.map((employee, index) => (<tr key={employee.id}>
                            
                           <StudentItem_1.default toggleStatus={handleShowModalToggle} showModal={handleShowModal} employee={employee} index={index}></StudentItem_1.default> 
                        </tr>))}
                </tbody>
            </table>
            <footer className="d-flex justify-content-end align-items-center gap-3">
                <select className="form-select">
                <option>Hiển thị 10 bản ghi trên trang</option>
                <option>Hiển thị 20 bản ghi trên trang</option>
                <option>Hiển thị 50 bản ghi trên trang</option>
                <option>Hiển thị 100 bản ghi trên trang</option>
                </select>
                <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#">
                    Previous
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    Next
                    </a>
                </li>
                </ul>
            </footer>
            </main>
        </div>
    </>);
}
exports.default = ListStudent;
