"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ColorBox = ({ color }) => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const textStyle = {
        color: 'white',
        fontSize: '24px',
    };
    return (<div style={boxStyle}>
      <span style={textStyle}>Box</span>
    </div>);
};
function Bai5() {
    const containerStyle = {
        display: 'flex',
        gap: '50px',
    };
    return (<div>
      Bài 5
      <div style={containerStyle}>
        <ColorBox color="red"/>
        <ColorBox color="blue"/>
        <ColorBox color="green"/>
      </div>
    </div>);
}
exports.default = Bai5;
