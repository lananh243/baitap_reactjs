import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState<number>(0);
    const [name, setName] = useState<string>("minh thu")
    useEffect(() => {
        console.log("useEffect đc gọi");  
    },[count, name])
    const handleClick = () => {
        setCount(count + 1);
    }
    // Giai đoạn đi xử lí logic
    // useEffect(()=>{},[])
  return (
    <div>UseEffect

        {/*
            Use effect : là 1 hook
            sinh ra để làm gì ?
            useEffect là 1 cái hàm
            Sinh ra để làm gì ?
            - Giải quyết các vấn đề và side effect (tác dụng phụ bên cạnh tác vụ chính)
            CÚ PHÁP
            3 cú pháp useEffect
            1. nhận vào 1 tham số là callback function(arrow function)
                + Khi component đc mount vào DOM thì useEffect đc gọi !!
                + Khi mỗi lần component re-render thì useEffect đc gọi !
            2. nhận vào 1 tham số là callback function(arrow function) và tham số thứ 2 là một mảng rỗng []
                + Khi component đc mount vào trong DOM thì useEffect đc gọi !
                + khi mỗi lần component re-render thì useEffect ko đc gọi
            3. nhận vào 1 tham số là callback function(arrow function) và tham số thứ 2 là một mảng [dependency] (sự phụ thuộc)
                + Khi component đc mount vào trong DOM thì useEffect đc gọi !
                + Khi dependecy thay đổi thì useEffect đc gọi
            cách dùng ntn ?
         */}
         <p>Giá trị biến count : {count}</p>
         <button onClick={handleClick}>Click</button>
    </div>
  )
}
