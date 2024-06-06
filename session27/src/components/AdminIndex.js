"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./bai7/Header"));
const Menu_1 = __importDefault(require("./bai7/Menu"));
const Main_1 = __importDefault(require("./bai7/Main"));
const Footer_1 = __importDefault(require("./bai7/Footer"));
function AdminIndex() {
    return (<div>AdminIndex
        <Header_1.default></Header_1.default>
        <Menu_1.default></Menu_1.default>
        <Main_1.default></Main_1.default>
        <Footer_1.default></Footer_1.default>
    </div>);
}
exports.default = AdminIndex;
