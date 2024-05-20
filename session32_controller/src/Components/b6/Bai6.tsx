import React, { useState } from 'react'
interface User {
    name?:string,
    email?:string,
    password?:string,
    rePassword?:string,
}
export default function Bai6() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const changeRePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value)
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user : User = {
            name: name,
            email: email,
            password: password,
            rePassword: rePassword
        }
        console.log("Tài khoản được thêm mới là :", user);
        
    }
  return (
    <div>
        <h1>Bài 6 : </h1>
        <form onSubmit={handleSubmit}>
            <b>Thêm mới sản phẩm</b>
            <p>Họ và tên</p>
            <input type="text" onChange={changeName}/>
            <p>Email</p>
            <input type="text" onChange={changeEmail}/>
            <p>Mật khẩu</p>
            <input type="password" onChange={changePassword}/>
            <p>Nhập lại mật khẩu</p>
            <input type="password" onChange={changeRePassword}/>
            <br /><br />
            <button type='submit' style={{backgroundColor:"darkslateblue", color:"white", width: "170px", border:"none"}}>Đăng ký</button>
        </form>
    </div>
  )
}
