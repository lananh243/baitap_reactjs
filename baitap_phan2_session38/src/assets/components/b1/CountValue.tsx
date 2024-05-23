import React, { memo } from 'react'
interface Props {
    count: number
}
function CountValue(props: Props) {
  return (
    <div>
      <h1>Bài 1</h1>
      <h2>Count : {props.count}</h2>
    </div>
  )
}
export default memo(CountValue)