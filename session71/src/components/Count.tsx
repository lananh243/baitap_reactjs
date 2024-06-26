import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../store/reducers/countReducer';

export default function Count() {
    // lấy dữ liệu từ kho
    // useSelector
    // Thực hiện hành động : useDispatch
    const data:any = useSelector(state => state);
    const dispatch = useDispatch()
    const increaseCount = () => {
        dispatch (increase())
    }
    const decreaseCount = () => {
        dispatch (decrease())
    }
    const handleReset = () => {
      dispatch (reset())
    }
  return (
    <div>Count
        <p>Giá trị biến count : {data.countReducer.count}</p>
        <button onClick={increaseCount}>Tăng</button>
        <button onClick={decreaseCount}>Giảm</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
