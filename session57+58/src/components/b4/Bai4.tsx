import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai4() {
  const removeById = (id:number) => {
    axios.delete(`http://localhost:8080/students/${id}`)
    .then((response) => {
        console.log("Giá trị của mảng sau khi xóa",response.data);
        
    })
    .catch((err) => console.log("Không tồn tại",err))
  }
  useEffect(() => {
    removeById(91);   
  },[]);
  return (
    <div></div>
  )
}
