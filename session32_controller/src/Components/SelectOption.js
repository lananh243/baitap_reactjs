"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function SelectOption() {
    const handleChange = (e) => {
        console.log("Giá trị người dùng chọn", e.target.value);
    };
    return (<div>
      SelectOption
      <select name="" id="" onChange={handleChange}>
        <option value="">Chọn tỉnh / thành phố</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="HCM">HCM</option>
        <option value="Hà Nam">Hà Nam</option>
      </select>
    </div>);
}
exports.default = SelectOption;
