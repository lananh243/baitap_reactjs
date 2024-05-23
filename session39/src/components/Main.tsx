import { memo } from 'react'
interface Props {
    getIdProduct: Function
}
function Main(props: Props) {
    console.log("Gọi function ra", props.getIdProduct);
    
  return (
    <div>Main
        {/* <p>Giá trị active : {props.getIdProduct}</p> */}
    </div>
  )
}
export default memo(Main)
