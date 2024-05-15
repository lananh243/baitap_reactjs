import React, { useState } from 'react'

export default function Bai10() {
    const genders = ['Nam', 'Nữ', 'Khác'];
    const [defaultGender, setDefaultGender] = useState<string>('Nam')
    const handleGender = () => {
        const randomIndex = Math.floor(Math.random() * genders.length);
        const randomGender = genders[randomIndex];
        setDefaultGender(randomGender);
    }
  return (
    <div>Bài 10
        <br /><br />
        <b>Gender : <i>{defaultGender}</i></b>
        <br /><br />
        <button onClick={handleGender}>Random gender</button>
    </div>
  )
}
