"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai3() {
    let user = {
        name: "Nguyễn Văn A",
        gender: "Nam",
        day: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội",
    };
    return (<div>Bài 3
        <ul>
            <li>Họ và tên: <b>{user.name}</b></li>
            <li>Giới tính: <b>{user.gender}</b></li>
            <li>Ngày sinh: <b>{user.day}</b></li>
            <li>Email: <b>{user.email}</b></li>
            <li>Địa chỉ: <b>{user.address}</b></li>
        </ul>
    </div>);
}
exports.default = Bai3;
