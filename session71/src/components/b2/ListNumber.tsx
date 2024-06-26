import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomNumber } from '../../store/reducers/listReducer';

export default function ListNumber() {
  const data:any = useSelector(state => state);
  const dispatch = useDispatch()
  const handleRandom = () => {
    dispatch (addRandomNumber())
  }

  return (
    <div>
      <h1>Bài 2</h1>
      <h2>List number : [<i>{data.listReducer.listNumber.join(',')}</i>]</h2>
      <button onClick={handleRandom}>Random number</button>
    </div>
  )
}
