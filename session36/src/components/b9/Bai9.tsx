import React, { useEffect, useState } from 'react'

export default function Bai9() {
    const [timeCount, setTimeCount] = useState<number>(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeCount(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    },[timeCount])
  return (
    <div>
        <h1>Bài 9</h1>
        <h2>Thời gian đã trôi qua : {timeCount} giây</h2>
    </div>
  )
}
