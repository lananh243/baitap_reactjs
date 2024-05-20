import React, { useState } from 'react'

export default function Bai4() {
    const [range, setRange] = useState<any>("");
    const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRange(e.target.value);
    }
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div> 
        <h1>Bài 4</h1>
        <form onSubmit={handleSubmit}>
          <h2>Tiến độ hoàn thành : {range} %</h2>  
          <input type="range" onChange={changeRange}/><br /><br />
          <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}
