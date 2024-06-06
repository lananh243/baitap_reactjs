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
function Bai5() {
    const [price, setPrice] = (0, react_1.useState)();
    const [id, setId] = (0, react_1.useState)();
    const [productName, setProductName] = (0, react_1.useState)("");
    const [quantity, setQuantity] = (0, react_1.useState)();
    const changeId = (e) => {
        setId(Number(e.target.value));
    };
    const changeName = (e) => {
        setProductName(e.target.value);
    };
    const changePrice = (e) => {
        setPrice(Number(e.target.value));
    };
    const changeQuantity = (e) => {
        setQuantity(Number(e.target.value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const productCode = {
            price: price,
            id: id,
            productName: productName,
            quantity: quantity
        };
        console.log("Sản phẩm mới :", productCode);
    };
    return (<div>
        <h1>Bài 5 : </h1>
        <form onSubmit={handleSubmit}>
            <b>Thêm mới sản phẩm</b>
            <p>Mã sản phẩm</p>
            <input type="text" onChange={changeId}/>
            <p>Tên sản phẩm</p>
            <input type="text" onChange={changeName}/>
            <p>Giá</p>
            <input type="text" onChange={changePrice}/>
            <p>Số lượng</p>
            <input type="number" min={1} max={50} step={1} onChange={changeQuantity}/>
            <br /><br />
            <button type='submit' style={{ backgroundColor: "darkslateblue", color: "white", width: "170px", border: "none" }}>Đăng ký</button>
        </form>
    </div>);
}
exports.default = Bai5;
