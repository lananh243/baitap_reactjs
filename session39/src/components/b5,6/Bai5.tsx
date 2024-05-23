import React, { useReducer } from 'react'

export default function Bai5() {
    const reducer = (count:any,action:any) => {
        switch(action){
            case "increase":
                return count + 1
            case "decrease" :
                return count - 1
            default :
                return count;
        }
    }
    let initialCount = 0;
    const result = useReducer(reducer,initialCount);
    const [count, dispatch] = result;
    const handleIncrease = () => {
        dispatch("increase")
    }
    const handleDecrease = () => {
        dispatch("decrease")
    }
  return (
    <div>
        <h1>Bài 5,6</h1>
        <h2>{count}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
