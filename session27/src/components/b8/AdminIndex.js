"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Head_1 = __importDefault(require("./Head"));
const Main1_1 = __importDefault(require("./Main1"));
const Menu1_1 = __importDefault(require("./Menu1"));
const Nav_1 = __importDefault(require("./Nav"));
function AdminIndex() {
    return (<div>
        <Head_1.default></Head_1.default>
        <Main1_1.default></Main1_1.default>
        <Menu1_1.default></Menu1_1.default>
        <Nav_1.default></Nav_1.default>
    </div>);
}
exports.default = AdminIndex;
