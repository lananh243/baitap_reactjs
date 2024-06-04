import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const login = (e:React.FormEvent) => {
    e.preventDefault();
    const state = {
      email: "nva@gmail.com",
      password: "12345678", 
      role: "Admin"
    }
    if (
      formData.email === state.email &&
      formData.password === state.password &&
      formData.role === state.role
    ){
      navigate('/account');
    }else{
      alert('Lỗi đăng nhập');
    }
  }
  return (
    <div>
      <form action="" onSubmit={login}>
        <h1>Đăng nhập</h1>
        <input type="text" name="email" placeholder='Nhập email' value={formData.email} onChange={handleChange}/>
        <br /><br />
        <input type="text" name="password" placeholder='Nhập mật khẩu' value={formData.password} onChange={handleChange}/>
        <br /><br />
        <select name="role" id="" value={formData.role} onChange={handleChange}>
          <option value="">--Chọn quyền--</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <br /><br />
        <button>Đăng nhập</button>
      </form>
    </div>
  )
}
