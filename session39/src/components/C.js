"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const A_1 = require("./A");
function C() {
    let result = (0, react_1.useContext)(A_1.context);
    return (<div>C
        <p>Xin chào ! {result}</p>
    </div>);
}
exports.default = C;
