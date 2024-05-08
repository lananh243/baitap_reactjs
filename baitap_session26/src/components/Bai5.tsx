import React from 'react';

interface ColorBoxProps {
  color: 'red' | 'blue' | 'green';
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  const boxStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '24px',
  };

  return (
    <div style={boxStyle}>
      <span style={textStyle}>Box</span>
    </div>
  );
};

export default function Bai5() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '50px',
  };

  return (
    <div>
      Bài 5
      <div style={containerStyle}>
        <ColorBox color="red" />
        <ColorBox color="blue" />
        <ColorBox color="green" />
      </div>
    </div>
  );
}