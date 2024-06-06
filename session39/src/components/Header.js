"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function Header(props) {
    console.log("Giá trị biến count ở bên component App");
    return (<div>Header
        <p>Giá trị count : {props.count}</p>
        
    </div>);
}
exports.default = (0, react_1.memo)(Header);
