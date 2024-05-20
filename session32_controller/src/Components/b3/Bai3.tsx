import React, { useState } from 'react'

export default function Bai3() {
    const [date, setDate] = useState<string>("");
    const changeDate = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div>
        <h1>Bài 3 :</h1>
        <form onSubmit={handleSubmit}>
            <h2>Ngày sinh : {date}</h2>
            <input type="date" onChange={changeDate}/><br /><br />
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}
