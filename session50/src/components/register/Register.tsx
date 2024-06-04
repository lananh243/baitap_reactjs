import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const register = (e:React.FormEvent) => {
        // kiểm tra mọi thông tin người dùng nhập ok hết thì
        // chuyển sang trang login
        e.preventDefault();
        // dùng hook navigate
        
        navigate("/login")
    }
  return (
    <div>Register
        <form onSubmit={register}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Nhập email'/>
            <br />
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Nhập tên'/>
            <br />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Mật khẩu'/>
            <br />
            <label htmlFor="">Confirm password</label>
            <input type="password" placeholder='Nhập lại mật khẩu'/>
            <br />
            <button>Register</button>
        </form>
    </div>
  )
}
