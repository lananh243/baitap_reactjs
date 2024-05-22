import React, { useEffect, useState } from 'react'

export default function Bai2() {
    const [count,setCount] = useState<number>(0);
    useEffect(() => {
        document.title = `Click ${count} lần`
    }, [count])
    const changeCount = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Bài 2</h1>
        <button onClick={changeCount}>Click {count} lần</button>
    </div>
  )
}
