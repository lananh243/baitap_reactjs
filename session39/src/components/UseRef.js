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
function UseRef() {
    const [count, setCount] = (0, react_1.useState)(0);
    let index = 0;
    const refCurrent = (0, react_1.useRef)(null); //ref(current:1)
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = refCurrent.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    // toán tử optinal change
    // let a = {
    //     number:1
    // }
    /*
        useRef là 1 hàm nhận vào tham số là giá trị khởi tạo
        useRef() trả về 1 đối tượng hay 1 object , bên trong object này sẽ có 1 key(current) với giá trị là giá trị tham số truyền vào
        khi mỗi lần component re-render thì useRef sẽ không tạo ra tham chiếu mới
        khi muốn focus vào ô input khi muốn nhập dữ liệu
    */
    console.log(refCurrent);
    const handleClick = () => {
        var _a;
        // a.number = ++a.number
        // ref.current = ref.current + 1;
        (_a = refCurrent.current) === null || _a === void 0 ? void 0 : _a.focus();
        index++;
        console.log(index);
        setCount(count + 1);
    };
    // console.log("Giá trị biến ref", ref);
    return (<div>UseRef
        <p>Giá trị count : {count}</p>
        <button onClick={handleClick}>Click</button>
        <br />
        <input ref={refCurrent} type="text" placeholder='Nhập email'/>
    </div>);
}
exports.default = UseRef;
