import React from "react";

export default function SelectOption() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Giá trị người dùng chọn", e.target.value);
  };
  return (
    <div>
      SelectOption
      <select name="" id="" onChange={handleChange}>
        <option value="">Chọn tỉnh / thành phố</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="HCM">HCM</option>
        <option value="Hà Nam">Hà Nam</option>
      </select>
    </div>
  );
}
