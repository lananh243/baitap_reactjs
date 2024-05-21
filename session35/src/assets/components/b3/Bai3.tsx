import React, { useState } from "react";

export default function Bai3() {
  const [color, setColor] = useState("black");
  const changeColor = () => {
    const newColor = color === "black" ? "red" : "black";
    setColor(newColor);
  };
  return (
    <div>
      <h1>Bài 3</h1>
      <h2 style={{ color: color === "red" ? "red" : "black" }}>Tiêu đề văn bản</h2>
      <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  );
}
