import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {
    const stateUser = useSelector((state:any) => {
        return state;
    })
    
  return (
    <div>
      <h1>Bài 1</h1>
        <h1>Thông tin cá nhân</h1>
        <p>Id : {stateUser.userReducer.id}</p>
        <p>Họ và tên : {stateUser.userReducer.name}</p>
        <p>Giới tính : {stateUser.userReducer.gender}</p>
        <p>Ngày sinh : {stateUser.userReducer.date}</p>
        <p>Địa chỉ : {stateUser.userReducer.address}</p>
    </div>
  )
}
