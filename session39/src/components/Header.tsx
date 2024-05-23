import { memo } from 'react'
interface Props {
    count: number
}

function Header(props:Props) {
    console.log("Giá trị biến count ở bên component App");
  return (
    <div>Header
        <p>Giá trị count : {props.count}</p>
        
    </div>
  )
}
export default memo(Header);