import React from 'react'
import "./b5.css"
import { useDispatch, useSelector } from 'react-redux'
import { changeMenu } from '../../store/reducers/menuReducer';
export default function Menu() {
  const isMenu = useSelector((state:any) => state.menuReducer.menuOrIcon)
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeMenu())
  }
  return (
    <div>
        <h1>Bài 5</h1>
        {isMenu ? (
            <div className='container-big'>
            <div className='item'>
              <i className="fa-solid fa-gauge"></i>
            </div>
            <div className='item'>
              <i className="fa-solid fa-user"></i> 
            </div>
            <div className='item'>
              <i className="fa-solid fa-money-check-dollar"></i>
            </div>
            <div className='item'>
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className='item'>
              <i className="fa-solid fa-file"></i>
            </div>
            <div className='item'>
              <i className="fa-solid fa-chevron-left" onClick={handleChange}></i> 
            </div>
          </div>
        ) : (<div className='container'>
            <div className='item'>
              <i className="fa-solid fa-gauge"></i>
              <span style={{marginLeft:"10px"}}>Bảng điều khiển</span>
            </div>
            <div className='item'>
              <i className="fa-solid fa-user"></i>
              <span style={{marginLeft:"10px"}}>Tài khoản</span>
            </div>
            <div className='item'>
              <i className="fa-solid fa-money-check-dollar"></i>
              <span style={{marginLeft:"10px"}}>Tài sản</span>
            </div>
            <div className='item'>
              <i className="fa-solid fa-chart-line"></i>
              <span style={{marginLeft:"10px"}}>Thống kê</span>
            </div>
            <div className='item'>
              <i className="fa-solid fa-file"></i>
              <span style={{marginLeft:"10px"}}>Tài liệu</span>
            </div>
            <div className='item'>
            <i className="fa-solid fa-chevron-left" onClick={handleChange}></i>
              <span style={{marginLeft:"10px"}}>Thu gọn</span>
            </div>
          </div>
  
        )}
    </div>
  )
}
