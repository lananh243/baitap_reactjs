import React, { useState } from 'react'

export default function Bai5() {
    const [isFlag, setIsFlag] = useState(true);
    const buttonContent = isFlag ? 'Hiện' : 'Ẩn'
    const handleClick = () => {
        setIsFlag(!isFlag)
    }
  return (
    <div>Bài 6
        <br /><br />
        <button onClick={handleClick}>{buttonContent}</button>
    </div>
  )
}
