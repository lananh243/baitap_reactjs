"use strict";
// import React, { useCallback, useState } from "react";
// import UseRef from "./components/UseRef";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import UseReducer from "./components/UseReducer";
// import UseContext from "./components/UseContext";
// import Bai1 from "./components/b1/Info";
// import Index from "./components/b1/Index";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = __importDefault(require("./components/b1/Index"));
const Bai5_1 = __importDefault(require("./components/b5,6/Bai5"));
const InputText_1 = __importDefault(require("./components/b7/InputText"));
const InputRadio_1 = __importDefault(require("./components/b8/InputRadio"));
// import Info from "./components/b1/Info";
// export default function App() {
// const [active, setActive] = useState<boolean>(false);
// const [count, setCount] = useState<number>(0);
// const handleClick = () => {
//   // setActive(!active);
//   setCount(count + 1);
// };
// // const getIdProduct = () => {
// // }
// let result = useCallback(() => {
//   const getIdProduct = () => {};
//   return getIdProduct;
// }, []);
// console.log("Component App re-render khi click");
/*
    khi component App được re-render thì các component con cũng đc re-render
  */
// return (
// <div>App
//   {active ? <p>Xin chào</p> : ""}
//   <UseRef></UseRef>
//   <Header count={count}></Header>
//   <Main getIdProduct={result}></Main>
//   <button onClick={handleClick}>Click active</button>
//   <UseReducer></UseReducer>
//   <UseContext></UseContext>
//   <Bai1></Bai1>
// </div>
<>{/* <Index /> */}</>;
//   );
// }
function App() {
    return (<div>
      <Index_1.default />
      <Bai5_1.default></Bai5_1.default>
      <InputText_1.default></InputText_1.default>
      <InputRadio_1.default></InputRadio_1.default>
    </div>);
}
exports.default = App;
