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
function UseMemo() {
    const [count, setCount] = (0, react_1.useState)(0);
    const [cart, setCart] = (0, react_1.useState)([
        { product: "ip5", price: 6000, quantity: 6 },
        {
            product: "ip6",
            price: 8000,
            quantity: 3,
        },
        {
            product: "ip15",
            price: 9000,
            quantity: 3,
        },
        {
            product: "ip14",
            price: 7000,
            quantity: 8,
        },
    ]);
    // let cart = [
    //     {
    //         product: "ip5",
    //         price: 6000,
    //         quantity: 6,
    //     },
    //     {
    //         product: "ip6",
    //         price: 8000,
    //         quantity: 3,
    //     },
    //     {
    //         product: "ip15",
    //         price: 9000,
    //         quantity: 3,
    //     },
    //     {
    //         product: "ip14",
    //         price: 7000,
    //         quantity: 8,
    //     }
    // ]
    let memo = (0, react_1.useMemo)(() => {
        let payment = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0);
        return payment;
    }, []);
    return (<div>
      UseMemo
      {/*
              đây là 1 hook giúp ghi việc những tính toán
           */}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button>Add</button>
    </div>);
}
exports.default = UseMemo;
