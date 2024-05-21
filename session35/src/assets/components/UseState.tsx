import { useState } from 'react'

export default function UseState() {
    const [count,setCount] = useState<number>(0);
    const increse=()=>{
        setCount(pre => pre + 1);
        setCount(a=>a + 2);
        setCount(b=>b + 3);
    }
    /*batch update*/ 
    /*
    hook là những cái hàm thôi , khi dùng hàm để ý cho thầy đầu vào của hàm,
    đầu ra trả về kết quả là gì ?
    useState dùng để quản lí trạng thái của dữ liệu
    useState trả về 1 cái mảng có 2 phần
        + phần tử đầu tiên là giá trị truyền vào useState
        + phần tử thứ 2 là 1 cái function
    dùng destructoring để hứng lấy giá trị
    khi cập nhật lại trạng thái của dữ liệu (setCount) thì component re-render lại

    */
    // const result = useState(0);
    // const [c,d] = useState(1);
    // const result = useState(0);
    // console.log("Kết quả",result);
    // let arr = [5,6];
    // let [a,b] = arr;
    console.log("component re-render");
    
    
  return (
    <div>
        <h1>UseState</h1>
        <b>Giá trị biến count : {count}</b>
        <br /><br />
        <button onClick={increse}>Tăng</button>
        <button onClick={()=> setCount(count-1)}>Giảm</button>
    </div>
  )
}
