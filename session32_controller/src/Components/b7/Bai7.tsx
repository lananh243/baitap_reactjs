import React, { useState } from 'react'

export default function Bai7() {
    const [gender, setgender] = useState<string>("");
    const changeGender = (e:React.ChangeEvent<HTMLInputElement>) => {
        setgender(e.target.value);
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div>
        <h1>Bài 7</h1>
        <form onSubmit={handleSubmit}>
            <h2>Giới tính : {gender}</h2>
            <input type="radio" value={"Nam"} checked={gender === "Nam"} onChange={changeGender}/>Nam
            <br />
            <input type="radio" value={"Nữ"} checked={gender === "Nữ"} onChange={changeGender}/>Nữ
            <br />
            <input type="radio" value={"Khác"} checked={gender === "Khác"} onChange={changeGender}/>Khác
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
