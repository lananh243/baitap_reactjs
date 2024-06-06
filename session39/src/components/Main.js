"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function Main(props) {
    console.log("Gọi function ra", props.getIdProduct);
    return (<div>Main
        {/* <p>Giá trị active : {props.getIdProduct}</p> */}
    </div>);
}
exports.default = (0, react_1.memo)(Main);
