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
function Bai7() {
    const [gender, setgender] = (0, react_1.useState)("");
    const changeGender = (e) => {
        setgender(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (<div>
        <h1>Bài 7</h1>
        <form onSubmit={handleSubmit}>
            <h2>Giới tính : {gender}</h2>
            <input type="radio" value={"Nam"} checked={gender === "Nam"} onChange={changeGender}/>Nam
            <br />
            <input type="radio" value={"Nữ"} checked={gender === "Nữ"} onChange={changeGender}/>Nữ
            <br />
            <input type="radio" value={"Khác"} checked={gender === "Khác"} onChange={changeGender}/>Khác
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>);
}
exports.default = Bai7;
