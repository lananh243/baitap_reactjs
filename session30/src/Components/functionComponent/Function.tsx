import React, { useState } from 'react'

export default function Function() {
    const [name,setName] = useState<string>("hoa");
    /*
    Event : Sự kiện
    onclick
    onchange
    oninput
    onkeydown
    onkeyup
    // nơi khai báo các hàm
    // dùng các từ khóa : let , const , var
    */ 
   const handleChange = () => {
    // đi xử lí
    // khi muốn cập nhật state(name)
    setName("hồng");
    // khi setName thì component re-render lại 1 lần
   }
   console.log("component render lại");
   
  return (
    <div>
        <p>{name}</p>
        <button onClick={handleChange}>click</button>
    </div>
  )
}
