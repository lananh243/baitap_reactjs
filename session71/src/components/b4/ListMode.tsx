import React from 'react'
import "./b4.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeBox } from '../../store/reducers/boxReducer';
export default function ListMode() {
  const isBox = useSelector((state:any) => state.boxReducer.longOrShort)
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeBox())
  }
  return (
    <div>
        <h1>Bài 4</h1>
        <button onClick={handleChange}>{isBox ? "Grid mode" : "List mode"}</button>
        {isBox ? (
        <div className='list-container'>
          <div className='list-item'>1</div>
          <div className='list-item'>2</div>
          <div className='list-item'>3</div>
          <div className='list-item'>4</div>
        </div>
      ) : (
        <div className='grid-container'>
          <div className='grid-item'>1</div>
          <div className='grid-item'>2</div>
          <div className='grid-item'>3</div>
          <div className='grid-item'>4</div>
        </div>
      )}
    </div>
  )
}
