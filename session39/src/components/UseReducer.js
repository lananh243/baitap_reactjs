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
function UseReducer() {
    const [count, setCount] = (0, react_1.useState)(0);
    let initial = {
        product: {},
        products: [],
        isLoading: false,
    };
    const reducer = (state, action) => {
        switch (action) {
            case "increase":
                return state + 1;
            case "decrease":
                return state - 1;
            default:
                return state;
        }
    };
    let initialCount = 0;
    const result = (0, react_1.useReducer)(reducer, initialCount);
    // dùng destructoring
    const [state, dispatch] = result;
    console.log("Giá trị result", result);
    const handleClick = () => {
        dispatch("increase");
    };
    const changeCount = () => {
        dispatch("decrease");
    };
    return (<div>
        UseReducer
        {/*
            Đây là hook hay còn gọi là hàm !
            dùng để quản lí các state phức tạp
            đối với những state đơn giản thì có dùng useReducer được ko ? ==> đc
            nhưng mà các state đơn giản thì nên dùng useState
                + Đầu vào useReducer nhận vào 2 tham số
                    + tham số thứ nhất là 1 cái hàm reducer - đặt tên gì cũng được
                    + tham số thứ 2 là 1 giá trị khởi tạo
            Nắm đc luồng chạy của useReducer bài học sau sẽ học redux(thư viện quản lí state)
         */}
         <p>Giá trị biến count : {state}</p>
         <button onClick={handleClick}>Increase</button>
         <button onClick={changeCount}>Decrease</button>
    </div>);
}
exports.default = UseReducer;
