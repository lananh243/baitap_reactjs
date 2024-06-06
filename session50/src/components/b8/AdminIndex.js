"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function AdminIndex() {
    return (<div>
        <h2>Đây là AdminIndex</h2>
        <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
    </div>);
}
exports.default = AdminIndex;
