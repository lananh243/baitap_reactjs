import React, { useState } from 'react'
interface User{
    email:string,
    username:string,
    password: string,
}
export default function FormAdvanced() {
    // Cách bình thường
    const [email, setEmail] = useState<string>("");
    const [username, setName] = useState<string>("");
    // Cách xử lí tối ưu hơn
    const [user, setUser] = useState<User>({
        email:"",
        username:"",
        password:"",
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        let value = e.target.value;
        let name= e.target.name;
        setUser({...user,[name]:value})

    }
    console.log("Giá trị user",user);
    
  return (
    <div>
        <h1>FormAdvanced</h1>
        <div>
            <label htmlFor="">Email</label>
            <input
                name='email'
                type="text"
                onChange={handleChange} 
            /><br /><br />
            <label htmlFor="">Username</label>
            <input
                name='username'
                type="text"
                onChange={handleChange}
            /><br /><br />
            <label htmlFor="">Mật khẩu</label>
            <input
                name='password'
                type="password"
                onChange={handleChange}
            /><br /><br />
            <label htmlFor="">Nhập lại mật khẩu</label>
            <input
                name='confirmPassword'
                type="password"
                onChange={handleChange}
            /><br /><br />
            <button>register</button>
        </div>
    </div>
  )
}
