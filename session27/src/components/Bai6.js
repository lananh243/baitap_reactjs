"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai6() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    };
    const formatName = (user) => {
        return user.firstName + " " + user.lastName;
    };
    return (<div>
            <div>Bài 6</div>
            <b>Họ và tên: {formatName(user)}</b>
        </div>);
}
exports.default = Bai6;
