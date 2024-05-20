import React, { useState } from "react";

export default function Bai2() {
  const [color, setColor] = useState<string | undefined>("");
  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
        <h1>Bài 2 : </h1>
        <form onSubmit={handleSubmit}>
            <h1>Color : {color}</h1>
            <h2>Form</h2>
            <p>Màu sắc</p>
            <input type="color" onChange={changeColor} /> <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
