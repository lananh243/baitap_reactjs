"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Register() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const register = (e) => {
        // kiểm tra mọi thông tin người dùng nhập ok hết thì
        // chuyển sang trang login
        e.preventDefault();
        // dùng hook navigate
        navigate("/login");
    };
    return (<div>Register
        <form onSubmit={register}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Nhập email'/>
            <br />
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Nhập tên'/>
            <br />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Mật khẩu'/>
            <br />
            <label htmlFor="">Confirm password</label>
            <input type="password" placeholder='Nhập lại mật khẩu'/>
            <br />
            <button>Register</button>
        </form>
    </div>);
}
exports.default = Register;
