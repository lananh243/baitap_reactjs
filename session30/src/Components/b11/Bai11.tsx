import React, { useState } from 'react'

export default function Bai11() {

    const [showTooltip, setTooltip] = useState(false);

    const handleMouseEnter = () => {
        setTooltip(true);
    };

    const handleMouseLeave = () => {
        setTooltip(false);
    };

  return (
    <div>Bài 11
        <br /><br />
        <button 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        Hover me</button>
        {showTooltip && <div className="tooltip"><button style={{backgroundColor:'grey', color:'white', border: '1px', fontSize:'25px'}}>Button</button></div>}
    </div>
  )
}
