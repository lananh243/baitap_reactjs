import React, { useState } from 'react'

export default function Bai8() {
    const [interest, setInterest] = useState<string[]>([]);
    const changeInterest = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInterest(prev =>
            e.target.checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div>
        <h1>Bài 8</h1>
        <form onSubmit={handleSubmit}>
            <h2>Sở thích : [{interest.join(", ")}]</h2>
            {['Đá bóng', 'Bóng chuyền', 'Code', 'Bơi lội'].map(hobby => (
                <div key={hobby}>
                    <input
                        type="checkbox"
                        value={hobby}
                        onChange={changeInterest}
                    /> {hobby}
                    <br />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
