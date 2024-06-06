"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai5() {
    return (<div>Bài 5
        <div style={{ display: 'flex', gap: '100px' }}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'red', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box</div>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box</div>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'green', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box</div>
        </div>
    </div>);
}
exports.default = Bai5;
