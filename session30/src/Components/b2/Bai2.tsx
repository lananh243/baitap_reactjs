import React, { useState } from "react";

export default function Bai2() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      Bài 2
      <h2>
        Dữ liệu người dùng nhập : <i>{inputValue}</i>
      </h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Nhập dữ liệu"
      />
    </div>
  );
}
