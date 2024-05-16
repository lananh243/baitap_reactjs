import React, { useState } from 'react'

export default function Bai5() {
  const [isFlag, setIsFlag] = useState<boolean>(true);
  return (
    <div>Bài 5
      <br /><br />
      {
        isFlag ? <button onClick={() => setIsFlag(!isFlag)}>Hiện</button> : <button onClick={() => setIsFlag(!isFlag)}>Ẩn</button>
      }
    </div>
  )
}
