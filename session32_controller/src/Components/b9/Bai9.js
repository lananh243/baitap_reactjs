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
function Bai9() {
    const [studentName, setStudentName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [address, setAddress] = (0, react_1.useState)('');
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const [successMessage, setSuccessMessage] = (0, react_1.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra các trường bắt buộc không được để trống
        if (!studentName || !email || !password) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        // Kiểm tra email có bị trùng không (giả sử đã có email trong localStorage)
        const existingUser = localStorage.getItem('user');
        if (existingUser && JSON.parse(existingUser).email === email) {
            setErrorMessage('Email đã được sử dụng.');
            return;
        }
        // Lưu dữ liệu vào localStorage
        const formData = {
            studentName,
            email,
            password,
            address,
        };
        localStorage.setItem('user', JSON.stringify(formData));
        // Xóa giá trị trong ô input
        setStudentName('');
        setEmail('');
        setPassword('');
        setAddress('');
        // Hiển thị thông báo thành công
        setSuccessMessage('Đăng ký tài khoản thành công.');
        // Focus vào ô input Tên sinh viên
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.focus();
        }
    };
    return (<div>
        <h1>Bài 9</h1>
        
        <form onSubmit={handleSubmit}>
            <h2>Đăng ký tài khoản</h2>
            <div>
            <label htmlFor="studentName">Tên sinh viên</label> <br /><br />
            <input type="text" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
            </div>
            <br />
            <div>
            <label htmlFor="email">Email</label><br /><br />
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <br />
            <div>
            <label htmlFor="password">Mật khẩu</label> <br /><br />
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br />
            <div>
            <label htmlFor="address">Địa chỉ</label><br /><br />
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <br /><br />
            <button type="submit">Đăng ký</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
    </div>);
}
exports.default = Bai9;
