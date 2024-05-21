import React, { useState } from 'react';

export default function Bai4() {
  const [content, setContent] = useState<string>("Hiện");
  const changeAppear = () => {
    const appear = content === "Hiện" ? "Ẩn" : "Hiện";
    setContent(appear);
  };

  return (
    <div>
      <h1>Bài 4</h1>
      <button onClick={changeAppear}>
        {content}
      </button>
      <p style={{ display: content === "Hiện" ? "block" : "none" }}>Tiêu đề văn bản</p>
    </div>
  );
}