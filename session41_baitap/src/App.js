"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Bai1_1 = __importDefault(require("./components/b1/Bai1"));
const Bai2_1 = __importDefault(require("./components/b2/Bai2"));
const Bai3_1 = __importDefault(require("./components/b3/Bai3"));
const Bai4_1 = __importDefault(require("./components/b4/Bai4"));
const Bai5_1 = __importDefault(require("./components/b5/Bai5"));
const Bai6_1 = __importDefault(require("./components/b6/Bai6"));
const Bai7_1 = __importDefault(require("./components/b7/Bai7"));
const Bai8_1 = __importDefault(require("./components/b8/Bai8"));
const Bai10_1 = __importDefault(require("./components/b10/Bai10"));
function App() {
    return (<div>
      <h2 className='text-blue-500 font-semibold h-8'>Rikkei Academy</h2>
      <Bai1_1.default></Bai1_1.default>
      <br /><br />
      <Bai2_1.default></Bai2_1.default>
      <br /><br />
      <Bai3_1.default></Bai3_1.default>
      <br /><br />
      <Bai4_1.default></Bai4_1.default>
      <br /><br />
      <Bai5_1.default></Bai5_1.default>
      <br /><br />
      <Bai6_1.default></Bai6_1.default>
      <br /><br />
      <Bai7_1.default></Bai7_1.default>
      <br /><br />
      <Bai8_1.default></Bai8_1.default>
      <br /><br />
      <Bai10_1.default></Bai10_1.default>
    </div>);
}
exports.default = App;
