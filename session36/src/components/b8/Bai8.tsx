import React, { useEffect, useState } from 'react';

export default function Bai8() {
    const [countCurrent, setCountCurrent] = useState<number>(0);
    const [countBefore, setCountBefore] = useState<number | null>(null);
    const [hasClicked, setHasClicked] = useState<boolean>(false);

    useEffect(() => {
        if (hasClicked && countBefore === null) {
            setCountBefore(0);
        }
    }, [countCurrent, hasClicked, countBefore]);

    const changeCount = () => {
        setHasClicked(true);
        setCountCurrent(countCurrent + 1);
    };

    return (
        <div>
            <h1>Bài 8</h1>
            <p>Giá trị trước : {countBefore !== null ? countBefore : ""}</p>
            <p>Giá trị hiện tại : {countCurrent}</p>
            <button onClick={changeCount}>Tăng</button>
        </div>
    );
}
