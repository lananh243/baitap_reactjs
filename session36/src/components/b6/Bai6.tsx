import React, { useEffect, useState } from 'react'

export default function Bai6() {
    const [title,setTitle] = useState<string>('');
    const [roll,setRoll] = useState<number>(0);
    const [rollPosition, setRollPosition] = useState<boolean>(false);

    useEffect(() => {
        setTitle(document.title);
        const handleRoll = () => {
            setRoll(window.scrollY);
            if(rollPosition){
                document.title = `Vị trí cuộn : ${window.scrollY}`
            }else{
                document.title = title;
            }
        }
        window.addEventListener('scroll', handleRoll)
        return () => {
            window.removeEventListener('scroll', handleRoll);
        }
    },[title,rollPosition]);

    const changeButton = () => {
        setRollPosition(!rollPosition);
    }

    return (
        <div>
            <h1>Bài 6</h1>
            <button onClick={changeButton}>{rollPosition ? "Trước khi cuộn" : "Sau khi cuộn"}</button>
            <p>Vị trí cuộn {roll}</p>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada.
            </div>
        </div>
    )
}