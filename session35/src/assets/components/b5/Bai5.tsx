import React, { useState } from 'react'

export default function Bai5() {
    const [content,setContent] = useState<string>("");
    const changeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
  return (
    <div>
        <h1>Bài 5</h1>
        <input onChange={changeContent} type="text" placeholder='Nhập nội dung'/>
        <p>{content}</p>
    </div>
  )
}
