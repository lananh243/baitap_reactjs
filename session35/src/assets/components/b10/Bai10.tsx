import React, { useState } from 'react';

export default function Bai10() {
    const [interest, setInterest] = useState<string[]>([]);
    const changeInterest = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInterest(prev =>
            e.target.checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };
    return (
        <div>
            <h1>Bài 10</h1>
            <h2>Sở thích : [{interest.join(", ")}]</h2>
            {['Đá bóng', 'Bóng chuyền', 'Code', 'Bơi lội'].map(item => (
                <div key={item}>
                    <input
                        type="checkbox"
                        value={item}
                        onChange={changeInterest}
                    /> {item}
                    <br />
                </div>
            ))}
        </div>
    );
}