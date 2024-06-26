import React from 'react'
import "./b6.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeE, changeVN } from '../../store/reducers/languageReducer';
export default function LanguageSlice() {
  const isLanguage = useSelector((state:any) => state.languageReducer.VNOrE);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeVN())
  }
  const languageChange = () => {
    dispatch(changeE())
  }
  return (
    <div>
      <h1>Bài 6</h1>
      <div className='text'>
        <div className='language'>{isLanguage}</div>
        <div className='language' onClick={handleChange}>Vietnamese</div>
        <div className='language' onClick={languageChange}>English</div>
      </div>
      <h2>{isLanguage === "Vietnamese" ? "Học viện Rikkei" : "Rikkei Academy"}</h2>
    </div>
  )
}

