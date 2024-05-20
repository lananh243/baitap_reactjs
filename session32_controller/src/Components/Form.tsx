import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState<string>("");
    const [email,setEmail] = useState<string>("")
    const handleClick=()=>{
        console.log("Đã gọi hàm");
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
        console.log("Giá trị người dùng nhập vào", e.target.value);
        // Cập nhật state
        setName(e.target.value);
    }
    const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    /*
    Các kĩ thuật sử lí trong form
    có 2 kĩ thuật xử li lí chính
    1.cotroller
    + lấy dữ liệu người dùng nhập vào ô input
    + lấy dữ iệu khi người dùng nhập vào ô textarea
    + chọn select-option
    - ở trong function component muốn quản lí dữ liệu (trạng thái) dùng useState
    2.uncontroller
    */ 
  return (
    <div>
        <label htmlFor="">Tên</label>
        <input onChange={handleChange} type="text" />
        <p>Tên người dùng nhập : {name}</p>
        <label htmlFor="">Email </label>
        <input onChange={changeEmail} type="text" />
        <p>Email người dùng nhập : {email}</p>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}
