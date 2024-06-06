"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
function Bai3() {
    return (<div style={{ display: 'flex', gap: "30px" }}>
      <react_bootstrap_1.Card style={{ width: '18rem' }}>
      <react_bootstrap_1.Card.Img variant="top" src="https://cdn.tgdd.vn/Files/2019/08/22/1190454/laptop-vien-man-hinh-mong-co-nhung-uu-va-nhuoc-diem-gi--4.jpg"/>
      <react_bootstrap_1.Card.Body>
        <react_bootstrap_1.Card.Title style={{ textAlign: 'right' }}>MacBook Air 2018</react_bootstrap_1.Card.Title>
        <react_bootstrap_1.Card.Text style={{ textAlign: 'right' }}>
          The reason I am selling the 
          machine is because it is too 
          much power for what I need
        </react_bootstrap_1.Card.Text>
        <div style={{ display: 'flex', gap: '20px' }}>
          <react_bootstrap_1.Button variant="primary">Xem chi tiết</react_bootstrap_1.Button>
          <span>30.000.000 đ</span>
        </div>
        
      </react_bootstrap_1.Card.Body>
      </react_bootstrap_1.Card>
      <react_bootstrap_1.Card style={{ width: '18rem' }}>
      <react_bootstrap_1.Card.Img variant="top" src="https://cdn.tgdd.vn/Files/2019/08/22/1190454/laptop-vien-man-hinh-mong-co-nhung-uu-va-nhuoc-diem-gi--4.jpg"/>
      <react_bootstrap_1.Card.Body>
        <react_bootstrap_1.Card.Title style={{ textAlign: 'right' }}>MacBook Air 2018</react_bootstrap_1.Card.Title>
        <react_bootstrap_1.Card.Text style={{ textAlign: 'right' }}>
          The reason I am selling the 
          machine is because it is too 
          much power for what I need
        </react_bootstrap_1.Card.Text>
        <div style={{ display: 'flex', gap: '20px' }}>
          <react_bootstrap_1.Button variant="primary">Xem chi tiết</react_bootstrap_1.Button>
          <span>30.000.000 đ</span>
        </div>
        
      </react_bootstrap_1.Card.Body>
      </react_bootstrap_1.Card>
    </div>);
}
exports.default = Bai3;
