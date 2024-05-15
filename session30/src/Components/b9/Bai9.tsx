import React, { useState } from 'react'

export default function Bai9() {
    const [emailValue, setEmail] = useState<string>("");
    const [passwordValue, setPassword] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    }

  return (
    <>Bài 9
        <form onSubmit={handleSubmit}>
            <h2>Form</h2>
            <input type="text" value={emailValue} onChange={handleEmail} placeholder='Nhập email'/><br /><br />
            <input type="password" value={passwordValue} onChange={handlePassword} placeholder='Nhập mật khẩu'/><br /><br />
            <button type='submit'>Submit</button> 
        </form>
        <br /><br />
        {submitted && (
        <>
          <div>
            <b>Email:</b> <i>{emailValue}</i>
          </div>
          <div>
            <b>Mật khẩu:</b> <i>{passwordValue}</i>
          </div>
        </>
      )}
            
       
        
        
    </>
  )
}
