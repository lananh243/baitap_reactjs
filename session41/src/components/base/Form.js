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
const formatData_1 = require("../utils/formatData");
const validateData_1 = require("../utils/validateData");
const saveData_1 = require("../utils/saveData");
function Form({ onClose }) {
    // state chứa dữ liệu của dối tượng nhân viên
    const [employee, setEmployee] = (0, react_1.useState)({
        id: 0,
        employeeName: "",
        dateOfBirth: "",
        email: "",
        address: "",
        status: true
    });
    const [nameError, setNameError] = (0, react_1.useState)(""); //Lỗi tên 
    const [dateOfBirthError, setDateOfBirthError] = (0, react_1.useState)("");
    const [emailError, setEmailError] = (0, react_1.useState)("");
    // state lưu trữ danh sách nhân viên
    const [employeeList, setEmpoyeeList] = (0, react_1.useState)(() => {
        const employeeLocal = localStorage.getItem("students");
        return employeeLocal ? JSON.parse(employeeLocal) : [];
    });
    // Validate dữ liệu đầu vào
    const validateData = (name, value) => {
        let isFlag = true;
        if (name === "employeeName") {
            if (!value) {
                setNameError("Tên không được để trống.");
                isFlag = false;
            }
            else {
                setNameError("");
            }
        }
        if (name === "dateOfBirth") {
            if (!value) {
                isFlag = false;
                setDateOfBirthError("Ngày sinh không được để trống.");
            }
            else {
                // kiểm tra ngày sinh có đc lớn hơn ngày hiện tại hay ko
                if ((0, formatData_1.formatDate)(value) > (0, formatData_1.formatDate)(new Date().toString())) {
                    isFlag = false;
                    setDateOfBirthError("Ngày sinh ko được lớn hơn ngày hiện tại");
                }
                else {
                    setDateOfBirthError("");
                }
            }
        }
        if (name === "email") {
            if (!value) {
                setEmailError("Email không được để trống.");
                isFlag = false;
            }
            else {
                if (!(0, validateData_1.validateEmail)(value)) {
                    setEmailError("Email ko đúng định dạng");
                    isFlag = false;
                }
                else {
                    setEmailError("");
                }
            }
        }
        return isFlag;
    };
    // Hàm lấy giá trị trong ô input
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        // cập nhật lại state cho đối tượng employee
        setEmployee(Object.assign(Object.assign({}, employee), { [name]: value }));
        // gọi hàm validate mỗi khi change dữ liệu 
        validateData(name, value);
    };
    const handleSubmit = (e) => {
        // Ngăn chặn sự kiện load lại trang
        e.preventDefault();
        // gọi hàm validate dữ liệu khi nhấn nút submit
        const nameIsFlag = validateData("employeeName", employee.employeeName);
        const dateIsFlag = validateData("dateOfBirth", employee.dateOfBirth);
        const emailIsFlag = validateData("email", employee.email);
        if (nameIsFlag && dateIsFlag && emailIsFlag) {
            // thêm mới nhân viên trên local
            const updateEmployeeLocals = [
                ...employeeList,
                Object.assign(Object.assign({}, employee), { id: Math.ceil(Math.random() * 10000) })
            ];
            // Lưu trữ dữ liệu trên localStorge
            (0, saveData_1.saveData)("students", updateEmployeeLocals);
            // đóng form thêm mới
            onClose();
        }
    };
    return (<>
        {/* Form thêm mới nhân viên */}
        <div className="overlay">
            <form className="form" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center">
                <h4>Chỉnh sửa nhân viên</h4>
                <i onClick={onClose} className="fa-solid fa-xmark"/>
            </div>
            <div>
                <label className="form-label" htmlFor="userName">
                Họ và tên
                </label>
                <input onChange={handleChangeInput} name='employeeName' type="text" className="form-control"/>
                {nameError && (<div className="form-text error">{nameError}</div>)}
            </div>
            <div>
                <label className="form-label" htmlFor="dateOfBirth">
                Ngày sinh
                </label>
                <input onChange={handleChangeInput} name='dateOfBirth' type="date" className="form-control"/>
        </div>
        {dateOfBirthError && (<div className="form-text error">
                {dateOfBirthError}
            </div>)}
        
            <div>
                <label className="form-label" htmlFor="email">
                Email
                </label>
                <input onChange={handleChangeInput} name='email' type="text" className="form-control"/>
            </div>
            {emailError && (<div className="form-text error">{emailError}</div>)}
            
            <div>
                <label className="form-label" htmlFor="address">
                Địa chỉ
                </label>
                <textarea onChange={handleChangeInput} className="form-control" name='address' rows={3} defaultValue={""}/>
            </div>
            <div>
                <button type='submit' className="w-100 btn btn-primary">Thêm mới</button>
            </div>
            </form>
        </div>
    </>);
}
exports.default = Form;
