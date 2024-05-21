import React, { useState } from 'react'

export default function Bai8() {
    const [city, setCity] = useState<string>("");
    const handleChangeCity = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);

    }
  return (
    <div>
        <h1>Bài 8</h1>
        <h2>Thành phố : {city}</h2>
        <select name="" id="" onChange={handleChangeCity}>
            <option value="">-- Chọn thành phố --</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
        </select>
    </div>
  )
}
