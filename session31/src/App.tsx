import React, { useState } from "react";
import ClassComponent from "./components/ClassComponent";
import Bai1 from "./components/b1/Bai1";
import Bai2 from "./components/b2/Bai2";
import Bai3 from "./components/b3/Bai3";
import Bai4 from "./components/b4/Bai4";
import Bai5 from "./components/b5/Bai5";
import Bai6 from "./components/b6/Bai6";
import Bai7 from "./components/b7/Bai7";
import Bai8 from "./components/b8/Bai8";
import Bai9 from "./components/b9/Bai9";

import A from "./components/A";

export default function App() {
  const [active, setActive] = useState<boolean>(true);
  const removeComponent = () => {
    console.log("Đã gọi vào hàm remove!!");
    setActive(!active);
  };
  const [value, setValue] = useState<string>('Open the form');
  const updateContent = () => {
    setValue('Close the open');
  }
  const [action, setAction] = useState<string>('Interface rendering');
  const updateValue = () => {
    setAction('Render dữ liệu');
  }  
  return (
    <div>
      App
      <ClassComponent></ClassComponent>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <div>
        <Bai5 content={value}/>
        <button onClick={updateContent}>Change props</button>
      </div>
      <div>
        <Bai6 content={action}/>
        <br />
        <button onClick={updateValue}>Change props</button>
      </div>
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
      
      {/* <A></A> */}
      {/* 
        lifecycle - vòng đời của classcomponent
        functional component không có vòng đời
        Vd: 1 con người sẽ có vòng đời
        Sinh ra ==> lớn lên ==> trưởng thành ==> lập sự nghiệp ==> lập gia đình ==> die
        class component nó cũng có vòng đời riêng của nó
        4 giai đoạn 
          giai đoạn 1 : khởi tạo (initial)
            + Đi khởi tạo props và state
            ==> thực thi 1 lần
          giai đoạn 2 : mounting (gắn vào UI)
            + Chạy các phương thức sau 
              1. componentWillMount()
              2. render()
                ko nên setState ở trong phương thức này
              3. componentDidmount()
              ==> thực thi 1 lần
          giai đoạn 3 : updating (cập nhật)
            ==> có thể thực hiện nhiều lần 
            - Khi nào sảy ra update
            ==> Khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì giai đoạn updating sảy ra
            ==> Cung cấp các phương thức sau
            1. shouldComponentUpdate()
            2. componentWillUpdate()
            3. render()
            4. componentDidUpdate()
          giai đoạn 4 : unmounting (gỡ bỏ khỏi UI)
            ==> thực hiện 1 lần
            cung cấp phương thức
            componentWillUnMount: thường dùng để xử lí các vấn đề như clearTimeout để tránh bị rò rỉ bộ nhớ
        )
       */}
       {active ? <A></A>:""}
      <button onClick={removeComponent}>Tháo gỡ component A</button>
    </div>
  );
}
