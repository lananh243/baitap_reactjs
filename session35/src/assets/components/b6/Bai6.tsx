import React, { useState } from 'react'

export default function Bai6() {
    const [count,setCount] = useState<number>(0);
    const handleCount = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Bài 6</h1>
        <h2>Bạn đã click <i>{count}</i> lần</h2>
        <button onClick={handleCount}>Click để tăng số lần click</button>
    </div>
  )
}
