"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Home() {
    return (<div>Home
        <react_router_dom_1.Outlet></react_router_dom_1.Outlet>
        
    </div>);
}
exports.default = Home;
