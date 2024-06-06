"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Box = ({ color }) => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color,
    };
    return <div style={boxStyle}></div>;
};
function Bai4() {
    return (<div>
        Bài 4
        <Box color="red"/>
    </div>);
}
exports.default = Bai4;
