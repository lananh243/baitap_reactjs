import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const changeState:any = useSelector (state => {
        return state;
    })
    const dispatch = useDispatch();
    const changeText = () => {
        dispatch (
            {
                type: "CHANGE_STATE"
            }
        )
    }
  return (
    <div>
        <h1>Bài 6</h1>
        <h3>{changeState.changeStateReducer}</h3>
        <button onClick={changeText}>Change state</button>
    </div>
  )
}
