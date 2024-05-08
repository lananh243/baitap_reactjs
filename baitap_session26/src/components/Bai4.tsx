import React from 'react'
interface ColorBox {
    color: string;
  }
  
  const Box: React.FC<ColorBox> = ({ color }) => {
    const boxStyle: React.CSSProperties = {
      width: '200px',
      height: '200px',
      backgroundColor: color,
    };
  
    return <div style={boxStyle}></div>;
  };
export default function Bai4() {
  return (
    <div>
        Bài 4
        <Box color="red"/>
    </div>
  )
}
