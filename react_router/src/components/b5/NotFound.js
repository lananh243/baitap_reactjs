"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function NotFound() {
    return (<>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>
        <h1 style={{ fontSize: "130px", color: "gray" }}>404</h1>
        <h3 style={{ color: "gray" }}>Not Found</h3>
    </div>

    </>);
}
exports.default = NotFound;
