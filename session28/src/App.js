"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Parent_1 = __importDefault(require("./components/Parent"));
const Products_1 = __importDefault(require("./components/Products"));
function App() {
    let fullName = "hoa";
    let age = 20;
    let products = [
        {
            name: "ip5",
            id: 1,
            price: 5000,
        },
        {
            name: "ip14",
            id: 2,
            price: 6000,
        },
        {
            name: "ip15",
            id: 3,
            price: 7000,
        },
    ];
    return (<div>
      App
      <p>
        props : properties - dùng để truyền , gửi dữ liệu từ component cha xuống
        component con - thế nào là component cha ? - thế nào là component con ?
        - component cha chứa component con
      </p>
      <p>state</p>
      <Parent_1.default a={fullName} b={age}></Parent_1.default>
      <Products_1.default products={products}></Products_1.default>
    </div>);
}
exports.default = App;
