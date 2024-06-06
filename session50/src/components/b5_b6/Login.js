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
const react_router_dom_1 = require("react-router-dom");
function Login() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [formData, setFormData] = (0, react_1.useState)({
        email: '',
        password: '',
        role: '',
    });
    const handleChange = (e) => {
        setFormData((prevState) => (Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value })));
    };
    const login = (e) => {
        e.preventDefault();
        const state = {
            email: "nva@gmail.com",
            password: "12345678",
            role: "Admin"
        };
        if (formData.email === state.email &&
            formData.password === state.password &&
            formData.role === state.role) {
            navigate('/account');
        }
        else {
            alert('Lỗi đăng nhập');
        }
    };
    return (<div>
      <form action="" onSubmit={login}>
        <h1>Đăng nhập</h1>
        <input type="text" name="email" placeholder='Nhập email' value={formData.email} onChange={handleChange}/>
        <br /><br />
        <input type="text" name="password" placeholder='Nhập mật khẩu' value={formData.password} onChange={handleChange}/>
        <br /><br />
        <select name="role" id="" value={formData.role} onChange={handleChange}>
          <option value="">--Chọn quyền--</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <br /><br />
        <button>Đăng nhập</button>
      </form>
    </div>);
}
exports.default = Login;
