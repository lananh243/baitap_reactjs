import React, { memo } from 'react'
interface Props {
    color: string
}
function ColorPicker(props: Props) {
  return (
    <div>
        <h2>Màu hiển thị : {props.color}</h2>
        <div style={{ backgroundColor: props.color, width: '120px', height: '120px', marginTop: '10px' }}></div>
    </div>
  )
}
export default memo(ColorPicker)