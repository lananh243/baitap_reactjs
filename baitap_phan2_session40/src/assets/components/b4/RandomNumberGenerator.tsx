import React, { useMemo, useState } from 'react'

export default function RandomNumberGenerator() {
    const [number, setNumber] = useState<number>(0);
    const randomNumber = useMemo(() => {
      return Math.floor(Math.random()*1000)
    },[]);
    const handleClick = () => {
      setNumber(randomNumber)
    }
  return (
    <div>
      <h1>Bài 4</h1>
      <h2>Number random : {number}</h2>
      <button onClick={handleClick}>Generate</button>
    </div>
  )
}
