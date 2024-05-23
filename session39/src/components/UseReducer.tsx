import React, { useReducer, useState } from 'react'

export default function UseReducer() {
    const [count,setCount] = useState<number>(0);
    let initial = {
        product: {},
        products: [],
        isLoading: false,
    }
    const reducer = (state:any, action:any) => {
        switch(action){
            case "increase":
                return state + 1
            case "decrease":
                return state - 1
            default :
                return state;
        }
    }
    let initialCount = 0;
    const result = useReducer (reducer,initialCount);
    // dùng destructoring
    const [state, dispatch] = result;
    console.log("Giá trị result", result);
    const handleClick = () => {
        dispatch("increase",)
    }
    const changeCount = () => {
        dispatch("decrease",)
    }
  return (
    <div>
        UseReducer
        {/* 
            Đây là hook hay còn gọi là hàm !
            dùng để quản lí các state phức tạp
            đối với những state đơn giản thì có dùng useReducer được ko ? ==> đc
            nhưng mà các state đơn giản thì nên dùng useState
                + Đầu vào useReducer nhận vào 2 tham số 
                    + tham số thứ nhất là 1 cái hàm reducer - đặt tên gì cũng được
                    + tham số thứ 2 là 1 giá trị khởi tạo
            Nắm đc luồng chạy của useReducer bài học sau sẽ học redux(thư viện quản lí state)
         */}
         <p>Giá trị biến count : {state}</p>
         <button onClick={handleClick}>Increase</button>
         <button onClick={changeCount}>Decrease</button>
    </div>
  )
}
