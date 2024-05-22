import React, { useEffect, useState } from 'react'

export default function Bai5() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

  return (
    <div>
        <h1>Bài 5</h1>
        <p>Thời gian hiện tại : {time.toLocaleTimeString()}</p>
    </div>
  )
}
