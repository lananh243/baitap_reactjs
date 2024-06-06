"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const UseContext_1 = require("./UseContext");
function E() {
    let result = (0, react_1.useContext)(UseContext_1.Context);
    return (<div>E
        <br /><br />
        Tên {result}

    </div>);
}
exports.default = E;
