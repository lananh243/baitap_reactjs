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
function Bai8() {
    const [countCurrent, setCountCurrent] = (0, react_1.useState)(0);
    const [countBefore, setCountBefore] = (0, react_1.useState)(null);
    const [hasClicked, setHasClicked] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (hasClicked && countBefore === null) {
            setCountBefore(0);
        }
    }, [countCurrent, hasClicked, countBefore]);
    const changeCount = () => {
        setHasClicked(true);
        setCountCurrent(countCurrent + 1);
    };
    return (<div>
            <h1>Bài 8</h1>
            <p>Giá trị trước : {countBefore !== null ? countBefore : ""}</p>
            <p>Giá trị hiện tại : {countCurrent}</p>
            <button onClick={changeCount}>Tăng</button>
        </div>);
}
exports.default = Bai8;
