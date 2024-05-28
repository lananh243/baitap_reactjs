import React from "react";
import "./login.scss";
export default function Login() {
  return (
    // Muốn dùng scss thì phải cài npm i sass
    <div className="login-form">
      <div className="login_picture">
        <img
          src="https://i.pinimg.com/originals/f7/ae/83/f7ae8313dc2040528c6be8d8a0253434.jpg"
          alt=""
        />
      </div>
      <div className="form-login">
        <h3 className="py-8">Login</h3>
        <label htmlFor="">
          E-Mail11
        </label>
        <br />
        <br />
        <input
          type="text"
          className="w-[100%] border-solid border-2 border-black-600 h-[40px] rounded-md"
          placeholder="Placeholder content"
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <br />
        <input type="password" placeholder="Placeholder content" className="w-[100%] border-solid border-2 border-black-600 h-[40px] rounded-md"/>
        <br /><br />
        <p className="text-right">Forgot password?</p>
        <br />
        <button className="w-[100%] border-solid border-2 border-black-600 h-[40px] bg-blue-500 text-white rounded-md">Login</button>
        <br /><br />
        <p className="login-text">or</p>
        <button className="w-[100%] border-solid border-2 border-black-700 h-[40px] bg-white rounded-md">Register now</button>
      </div>
    </div>
  );
}
