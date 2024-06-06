"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UseEffect_1 = __importDefault(require("./components/UseEffect"));
const Bai1_1 = __importDefault(require("./components/b1/Bai1"));
const Bai2_1 = __importDefault(require("./components/b2/Bai2"));
const Bai3_1 = __importDefault(require("./components/b3/Bai3"));
const Bai5_1 = __importDefault(require("./components/b5/Bai5"));
const Bai6_1 = __importDefault(require("./components/b6/Bai6"));
const Bai7_1 = __importDefault(require("./components/b7/Bai7"));
const Bai8_1 = __importDefault(require("./components/b8/Bai8"));
const Bai9_1 = __importDefault(require("./components/b9/Bai9"));
function App() {
    return (<div>
      App
      <UseEffect_1.default></UseEffect_1.default>
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai5_1.default></Bai5_1.default>
      <Bai6_1.default></Bai6_1.default>
      <Bai7_1.default></Bai7_1.default>
      <Bai8_1.default></Bai8_1.default>
      <Bai9_1.default></Bai9_1.default>
    </div>);
}
exports.default = App;
