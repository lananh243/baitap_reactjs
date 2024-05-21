import React, { useState } from 'react'

export default function Bai7() {
    const [content,setContent] = useState<string>("");
    const changeContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }
    const characterCount = content.length;
  return (
    <div>
        <h1>Bài 7</h1>
        <textarea name="" id="" onChange={changeContent}></textarea>
        <p>Số ký tự : {characterCount}</p>
    </div>
  )
}
