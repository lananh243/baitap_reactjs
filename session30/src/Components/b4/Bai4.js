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
function Bai4() {
    const [optionValue, setOptionValue] = (0, react_1.useState)("");
    const handleChange = (event) => {
        setOptionValue(event.target.value);
    };
    return (<div>Bài 4
        <h2>Tỉnh / Thành phố : <i>{optionValue}</i></h2>
        <select name="city" id="city" value={optionValue} onChange={handleChange}>
            <option value="">---Chọn tỉnh / Thành phố---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
        </select>
    </div>);
}
exports.default = Bai4;
