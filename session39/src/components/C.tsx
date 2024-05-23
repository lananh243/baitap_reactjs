import { useContext } from 'react'
import { context } from './A'

export default function C() {
    let result = useContext(context);
  return (
    <div>C
        <p>Xin chào ! {result}</p>
    </div>
  )
}
