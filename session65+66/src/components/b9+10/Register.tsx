import React from 'react'
import "./account.css"
export default function Register() {
  return (
    <div className='box'>
        <h2>Đăng kí</h2>
        <input type="text" placeholder='Nhập email...'/>
        <br /><br />
        <input type="text" placeholder='Nhập mật khẩu'/>
        <br /><br />
        <button type='submit'>Đăng nhập</button>
    </div>
  )
}
