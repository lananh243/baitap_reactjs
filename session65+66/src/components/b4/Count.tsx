import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any = useSelector (state => {
        return state;
    })
    // console.log(countState);
    const dispatch = useDispatch();
    const increase = () => {
        dispatch (
            {
                type: "INCREASE"
            }
        )
    }
    const decrease = () => {
        dispatch (
            {
                type: "DECREASE"
            }
        )
    }
  return (
    <div>
        <h1>Bài 4</h1>
        <p>Giá trị biến Count : {countState.countReducer}</p>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Giảm</button>
    </div>
  )
}
