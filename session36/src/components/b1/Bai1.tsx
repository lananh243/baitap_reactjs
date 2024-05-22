import React, { useEffect, useState } from 'react'

export default function Bai1() {
    const [title, setTitle] = useState<string>("")
    useEffect(()=> {
        document.title = title
    }, [title])
    const changeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
  return (
    <div>
        <h1>Bài 1</h1>
        <input type="text" placeholder='Nhập tiêu đề' onChange={changeTitle}/>
    </div>
  )
}
