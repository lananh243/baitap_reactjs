"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai1() {
    return (<div> Bài 1
       <h3>Danh sách khóa học</h3>
       <ul>1. HTML</ul>
       <ul>2. CSS</ul>
       <ul>3. JavaScript</ul>
       <ul>4. ReactJS</ul>
    </div>
    /*
      khi return các element thì phải có thẻ fragment bọc bên ngoài
    */
    );
}
exports.default = Bai1;
