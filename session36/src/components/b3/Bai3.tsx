import React, { useState } from "react";

export default function Bai3() {
  const tabs = [
    {
      id: 1,
      title: "Trang chủ",
    },
    {
      id: 2,
      title: "Liên hệ",
    },
    {
      id: 3,
      title: "Giới thiệu",
    },
    {
      id: 4,
      title: "Đăng nhập",
    },
  ];
  const [active, setActive] = useState<number>(1);

  const handleChangeTab = (id: number) => {
    setActive(id);
  };

  return (
    <div>
      <h1>Bài 3</h1>
      <div style={{ display: "flex", gap: 50 }}>
        {tabs.map((tab) => (
          <span
            className={`${active === tab.id ? "active" : ""}`}
            onClick={() => handleChangeTab(tab.id)}
          >
            {tab.title}
          </span>
        ))}
      </div>
    </div>
  );
}
