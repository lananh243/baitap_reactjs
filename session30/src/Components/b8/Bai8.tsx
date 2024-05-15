import React, { useState } from 'react'

export default function Bai8() {
  const [count, setCount] = useState<number>(0);
  const handleChange = () => {
    setCount(count + 1);
  }
  return (
    <div>Bài 8
        <br /><br />
        <button onClick={handleChange}>Click <i>{count}</i> lần</button>
    </div>
  )
}
