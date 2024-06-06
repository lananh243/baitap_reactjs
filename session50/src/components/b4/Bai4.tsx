import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Bai4() {
    const [searchParam, setSearchParam] = useSearchParams();
    const [inputValue, setInputValue] = useState("");
    const studentName = searchParam.get("studentName")

  return (
    <div>
        <h2>Kết quả : {studentName}</h2>
        <div style={{display:'flex', gap:"10px"}}>
        <input style={{width:"300px"}} placeholder='Nhập từ khóa tìm kiếm' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button style={{height:"30px", width:"80px", backgroundColor:"darkslateblue", color:"white", borderRadius:"7px"}} onClick={() => setSearchParam({ studentName : inputValue})}>Search</button>
        </div>
    </div>
  )
}
