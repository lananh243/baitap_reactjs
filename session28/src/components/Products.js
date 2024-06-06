"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Product_1 = __importDefault(require("./Product"));
// const props = {
//     products : [],
//     a : 6
// }
function Products({ products }) {
    console.log(products);
    return (<div>
      Products
      <ul>
        {products.map((item, index, arr) => {
            return <Product_1.default product={item}></Product_1.default>;
        })}
      </ul>
    </div>);
}
exports.default = Products;
