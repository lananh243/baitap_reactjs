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
    const [emailValue, setEmail] = (0, react_1.useState)("");
    const [passwordValue, setPassword] = (0, react_1.useState)("");
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (<>Bài 9
        <form onSubmit={handleSubmit}>
            <h2>Form</h2>
            <input type="text" value={emailValue} onChange={handleEmail} placeholder='Nhập email'/><br /><br />
            <input type="password" value={passwordValue} onChange={handlePassword} placeholder='Nhập mật khẩu'/><br /><br />
            <button type='submit'>Submit</button> 
        </form>
        <br /><br />
        {submitted && (<>
          <div>
            <b>Email:</b> <i>{emailValue}</i>
          </div>
          <div>
            <b>Mật khẩu:</b> <i>{passwordValue}</i>
          </div>
        </>)}
            
       
        
        
    </>);
}
exports.default = Bai9;
