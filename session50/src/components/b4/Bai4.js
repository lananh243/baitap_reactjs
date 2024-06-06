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
const react_router_dom_1 = require("react-router-dom");
function Bai4() {
    const [searchParam, setSearchParam] = (0, react_router_dom_1.useSearchParams)();
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const studentName = searchParam.get("studentName");
    return (<div>
        <h2>Kết quả : {studentName}</h2>
        <div style={{ display: 'flex', gap: "10px" }}>
        <input style={{ width: "300px" }} placeholder='Nhập từ khóa tìm kiếm' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button style={{ height: "30px", width: "80px", backgroundColor: "darkslateblue", color: "white", borderRadius: "7px" }} onClick={() => setSearchParam({ studentName: inputValue })}>Search</button>
        </div>
    </div>);
}
exports.default = Bai4;
