"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hook_1 = __importDefault(require("./assets/components/Hook"));
const UseState_1 = __importDefault(require("./assets/components/UseState"));
const Bai1_1 = __importDefault(require("./assets/components/b1/Bai1"));
const Bai2_1 = __importDefault(require("./assets/components/b2/Bai2"));
const Bai3_1 = __importDefault(require("./assets/components/b3/Bai3"));
const Bai4_1 = __importDefault(require("./assets/components/b4/Bai4"));
const Bai5_1 = __importDefault(require("./assets/components/b5/Bai5"));
const Bai6_1 = __importDefault(require("./assets/components/b6/Bai6"));
const Bai7_1 = __importDefault(require("./assets/components/b7/Bai7"));
const Bai8_1 = __importDefault(require("./assets/components/b8/Bai8"));
const Bai9_1 = __importDefault(require("./assets/components/b9/Bai9"));
const Bai10_1 = __importDefault(require("./assets/components/b10/Bai10"));
function App() {
    return (<div>
      <Hook_1.default></Hook_1.default>
      <UseState_1.default></UseState_1.default>
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai4_1.default></Bai4_1.default>
      <Bai5_1.default></Bai5_1.default>
      <Bai6_1.default></Bai6_1.default>
      <Bai7_1.default></Bai7_1.default>
      <Bai8_1.default></Bai8_1.default>
      <Bai9_1.default></Bai9_1.default>
      <Bai10_1.default></Bai10_1.default>
      {/*
          Hook : (móc) dùng cho functional component ra đời ở phiên bản
          React 16.8(2018)
          React ra đời năm 2013
          Khi hook chưa ra đời thì function component thì chỉ có nhiệm vụ tạo ra các UI
          function Header(){
            return(
              <div>header</div>
            )
          }
          - Khi mà hook ra đời (móc) bản chất hook là những cái hàm , phương thức đưa vào ,móc vào trong function giúp cho function component có thể làm đc những tính năng như classcomponent
          - Việc các em dùng hook cú pháp ngắn gọn hơn , không cần dùng this(khó hiểu ) như trong class
          - HOOK LÀ NHỮNG CÁI HÀM , PHƯƠNG THỨC
          Các hook phải học
          1. useState
          2. useEffect
          3. memo(HOC - higher order component)
          4. useCallback
          5. useMemo
          6. useContext
          7. useReducer
          .....
         */}
    </div>);
}
exports.default = App;
