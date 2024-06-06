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
function LoginForm() {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const handleSubmit = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
        };
        console.log("Danh sách người dùng", user);
    }, [email, password]);
    return (<div>
      <h1>Bài 6</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br /><br />
          <input type="email" placeholder="Nhập email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br /><br />
          <input type="password" placeholder="Nhập password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>);
}
exports.default = LoginForm;
