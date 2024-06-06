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
    const [numbers, setNumbers] = (0, react_1.useState)([]);
    const handleAddElement = () => {
        const random = Math.floor(Math.random() * 100) + 1;
        setNumbers([...numbers, random]);
        /*
          khi muốn load lại component (re-render) thì đi setState
          bắt buộc cái state phải khác state ban đầu
        */
    };
    return (<div>
      Bài 7
      <h2>Mảng số: <i>{JSON.stringify(numbers)}</i></h2>
      <button onClick={handleAddElement}>Add element</button>
    </div>);
}
exports.default = Bai7;
