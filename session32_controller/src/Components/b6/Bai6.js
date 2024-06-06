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
function Bai6() {
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [rePassword, setRePassword] = (0, react_1.useState)("");
    const changeName = (e) => {
        setName(e.target.value);
    };
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const changeRePassword = (e) => {
        setRePassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
            rePassword: rePassword
        };
        console.log("Tài khoản được thêm mới là :", user);
    };
    return (<div>
        <h1>Bài 6 : </h1>
        <form onSubmit={handleSubmit}>
            <b>Thêm mới sản phẩm</b>
            <p>Họ và tên</p>
            <input type="text" onChange={changeName}/>
            <p>Email</p>
            <input type="text" onChange={changeEmail}/>
            <p>Mật khẩu</p>
            <input type="password" onChange={changePassword}/>
            <p>Nhập lại mật khẩu</p>
            <input type="password" onChange={changeRePassword}/>
            <br /><br />
            <button type='submit' style={{ backgroundColor: "darkslateblue", color: "white", width: "170px", border: "none" }}>Đăng ký</button>
        </form>
    </div>);
}
exports.default = Bai6;
