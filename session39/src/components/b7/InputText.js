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
function InputText() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "value":
                return action.payload;
            default:
                return state;
        }
    };
    let inputData = '';
    const result = (0, react_1.useReducer)(reducer, inputData);
    const [state, dispatch] = result;
    const changeInput = (e) => {
        dispatch({ type: "value", payload: e.target.value });
    };
    return (<div>
      <h1>Bài 7</h1>
      <h2>{state}</h2>
      <input type="text" placeholder='Nhập dữ liệu' onChange={changeInput}/>
    </div>);
}
exports.default = InputText;
