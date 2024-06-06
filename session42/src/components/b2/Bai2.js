"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./bai2.css");
function Bai2() {
    return (<div>
        <h1>Bài 2</h1>
        <react_bootstrap_1.InputGroup id='input_1' size="sm" className="mb-3">
            <react_bootstrap_1.Form.Control aria-label="Input cỡ bé" aria-describedby="inputGroup-sizing-sm" placeholder='Input cỡ bé'/>
        </react_bootstrap_1.InputGroup>
      <br />
      <react_bootstrap_1.InputGroup className="mb-3" id='input_1'>
        <react_bootstrap_1.Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Input cỡ trung bình'/>
      </react_bootstrap_1.InputGroup>
      <br />
      <react_bootstrap_1.InputGroup size="lg" id='input_1'>
        <react_bootstrap_1.Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='In put cỡ lớn'/>
      </react_bootstrap_1.InputGroup>
    </div>);
}
exports.default = Bai2;
