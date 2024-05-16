import React, { useState } from 'react';

export default function Bai7() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleAddElement = () => {
    const random: number = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, random]);
    /*
      khi muốn load lại component (re-render) thì đi setState
      bắt buộc cái state phải khác state ban đầu
    */ 
  };

  return (
    <div>
      Bài 7
      <h2>Mảng số: <i>{JSON.stringify(numbers)}</i></h2>
      <button onClick={handleAddElement}>Add element</button>
    </div>
  );
}