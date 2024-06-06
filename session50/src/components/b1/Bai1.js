"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Bai1() {
    const { productId } = (0, react_router_dom_1.useParams)();
    return (<div>
        <h2>Id : {productId}</h2>
    </div>);
}
exports.default = Bai1;
