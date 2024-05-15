import React, { useState } from 'react'

export default function Bai4() {
    const [optionValue, setOptionValue] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionValue(event.target.value)
    }
  return (
    <div>Bài 4
        <h2>Tỉnh / Thành phố : <i>{optionValue}</i></h2>
        <select name="city" id="city" value={optionValue} onChange={handleChange}>
            <option value="">---Chọn tỉnh / Thành phố---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Hà Tĩnh">Hà Tĩnh</option>
        </select>
    </div>
  )
}
