// import React, { useCallback, useState } from "react";
// import UseRef from "./components/UseRef";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import UseReducer from "./components/UseReducer";
// import UseContext from "./components/UseContext";
// import Bai1 from "./components/b1/Info";
// import Index from "./components/b1/Index";

import Index from "./components/b1/Index";
import Bai5 from "./components/b5,6/Bai5";
import InputText from "./components/b7/InputText";
import InputRadio from "./components/b8/InputRadio";
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

export default function App() {
  return (
    <div>
      <Index />
      <Bai5></Bai5>
      <InputText></InputText>
      <InputRadio></InputRadio>
    </div>
  );
}
