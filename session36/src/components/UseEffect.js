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
function UseEffect() {
    const [count, setCount] = (0, react_1.useState)(0);
    const [name, setName] = (0, react_1.useState)("minh thu");
    (0, react_1.useEffect)(() => {
        console.log("useEffect đc gọi");
    }, [count, name]);
    const handleClick = () => {
        setCount(count + 1);
    };
    // Giai đoạn đi xử lí logic
    // useEffect(()=>{},[])
    return (<div>UseEffect

        {/*
            Use effect : là 1 hook
            sinh ra để làm gì ?
            useEffect là 1 cái hàm
            Sinh ra để làm gì ?
            - Giải quyết các vấn đề và side effect (tác dụng phụ bên cạnh tác vụ chính)
            CÚ PHÁP
            3 cú pháp useEffect
            1. nhận vào 1 tham số là callback function(arrow function)
                + Khi component đc mount vào DOM thì useEffect đc gọi !!
                + Khi mỗi lần component re-render thì useEffect đc gọi !
            2. nhận vào 1 tham số là callback function(arrow function) và tham số thứ 2 là một mảng rỗng []
                + Khi component đc mount vào trong DOM thì useEffect đc gọi !
                + khi mỗi lần component re-render thì useEffect ko đc gọi
            3. nhận vào 1 tham số là callback function(arrow function) và tham số thứ 2 là một mảng [dependency] (sự phụ thuộc)
                + Khi component đc mount vào trong DOM thì useEffect đc gọi !
                + Khi dependecy thay đổi thì useEffect đc gọi
            cách dùng ntn ?
         */}
         <p>Giá trị biến count : {count}</p>
         <button onClick={handleClick}>Click</button>
    </div>);
}
exports.default = UseEffect;
