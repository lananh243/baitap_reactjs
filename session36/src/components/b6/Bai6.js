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
function Bai6() {
    const [title, setTitle] = (0, react_1.useState)('');
    const [roll, setRoll] = (0, react_1.useState)(0);
    const [rollPosition, setRollPosition] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setTitle(document.title);
        const handleRoll = () => {
            setRoll(window.scrollY);
            if (rollPosition) {
                document.title = `Vị trí cuộn : ${window.scrollY}`;
            }
            else {
                document.title = title;
            }
        };
        window.addEventListener('scroll', handleRoll);
        return () => {
            window.removeEventListener('scroll', handleRoll);
        };
    }, [title, rollPosition]);
    const changeButton = () => {
        setRollPosition(!rollPosition);
    };
    return (<div>
            <h1>Bài 6</h1>
            <button onClick={changeButton}>{rollPosition ? "Trước khi cuộn" : "Sau khi cuộn"}</button>
            <p>Vị trí cuộn {roll}</p>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada.
            </div>
        </div>);
}
exports.default = Bai6;
