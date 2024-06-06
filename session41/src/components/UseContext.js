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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const react_1 = __importStar(require("react"));
const A_1 = __importDefault(require("./A"));
exports.Context = (0, react_1.createContext)("");
function UseContext() {
    const [name, setName] = (0, react_1.useState)("Trang");
    // dùng props để gửi dữ liệuname(Trang)
    // component E nhận giá trị trang
    return (<div>
        usecontext
        {/*
            sinh ra giúp cho việc truyền dữ liệu giữa các component có quan hệ cha con
            đc nhanh hơn, dễ dàng hơn ko phải truyền theo kiểu props bình thường
            - Các component phải có quan hệ cha con
            - tạo 1 biến gán = createContext("")
            export biến ra
            - dùng biến này bọc component
            <Biến.Provider value={}>
            - component con muốn nhận data
            useContext(Biến bên trên export)
         */}
         <exports.Context.Provider value={name}>
            <A_1.default></A_1.default>
         </exports.Context.Provider>
         
    </div>);
}
exports.default = UseContext;
