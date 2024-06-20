import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RandomNumber() {
  const randomNumberState:any = useSelector (state => {
    return state;
  })
  const dispatch = useDispatch();
  const randomNumber = () => {
    dispatch (
      {
        type: "ADD_RANDOM_NUMBER"
      }
    )
  }
  return (
    <div>
      <h1>Bài 5</h1>
      <i>[{randomNumberState.randomNumberReducer.join(',')}]</i>
      <br /><br />
      <button onClick={randomNumber}>Generate Random Number</button>
    </div>
  )
}
