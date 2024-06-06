"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
let course = ["HTML", "CSS", "JavaScript", "ReactJS"];
function Bai1() {
    return (<div>
      Bài 1
      <h2>Danh sách khóa học</h2>
      {course.map((item, index) => {
            return <ul key={index}>
          <ul>{index + 1} : {item}</ul>
      </ul>;
        })}
    </div>);
}
exports.default = Bai1;
