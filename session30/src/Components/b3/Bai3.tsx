import React, { useState } from 'react'

export default function Bai3() {
  const [inputValue,setInputValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  return (
    <div>Bài 3
        <h2>Thời gian : <i>{inputValue}</i></h2>
        <input type="date" value={inputValue} onChange={handleChange}/>
    </div>
  )
}
