import React from 'react'
import Child from './Child'

interface Props {
  a: string,
  b: number,
}
export default function Parent(props:Props) {
  return (
    <div>Parent
      <p>Xin chào {props.a} năm nay tôi {props.b} tuổi </p>

      <Child></Child>
    </div>
  )
}
