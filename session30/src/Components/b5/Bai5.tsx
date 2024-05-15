import React, { useState } from 'react'

export default function Bai5() {
  const [isFlag, setIsFlag] = useState(true);
  const buttonValue = isFlag ? 'Hiện' : 'Ẩn'
  const [hasChange, setHasChange] = useState(false)
  const handleClick = () => {
    if(!hasChange){
      setIsFlag(!isFlag);
      setHasChange(true)
    }
  }
  return (
    <div>Bài 5
      <br /><br />
      <button onClick={handleClick}>{buttonValue}</button>
    </div>
  )
}
