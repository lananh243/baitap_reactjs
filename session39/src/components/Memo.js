"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Memo() {
    return (<div>Memo
        {/*
            memo đây ko phải là hook
            đc gọi là HOC (higher order component) : hàm bậc cao
            memo cơ chế hoạt động là sẽ đi kiểm tra xem trong component cps props nào thay đổi hay ko ? Nếu thay đổi
            thì component sẽ re-render , còn ko thì sẽ ko re-render
         */}
    </div>);
}
exports.default = Memo;
