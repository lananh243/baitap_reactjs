"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Bai1_1 = __importDefault(require("./components/Bai1"));
const Bai2_1 = __importDefault(require("./components/Bai2"));
const Bai3_1 = __importDefault(require("./components/Bai3"));
const Bai4_1 = __importDefault(require("./components/Bai4"));
const Bai5_1 = __importDefault(require("./components/Bai5"));
const Bai6_1 = __importDefault(require("./components/Bai6"));
function App() {
    return (<div>
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai4_1.default></Bai4_1.default>
      <Bai5_1.default></Bai5_1.default>
      <Bai6_1.default></Bai6_1.default>
    </div>);
}
exports.default = App;
