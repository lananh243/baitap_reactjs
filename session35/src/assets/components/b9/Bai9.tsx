import React, { useState } from 'react'

export default function Bai9() {
    const [gender, setGender] = useState<string>("");
    const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }
  return (
    <div>
        <h1>Bài 9</h1>
        <h2>Giới tính : {gender}</h2>
        <input onChange={handleGender} type="radio" value={"Nam"} checked={gender === "Nam"} />Nam
        <input onChange={handleGender} type="radio" value={"Nữ"} checked={gender === "Nữ"}/>Nữ
        <input onChange={handleGender} type="radio" value={"Khác"} checked={gender === "Khác"}/>Khác
    </div>
  )
}
