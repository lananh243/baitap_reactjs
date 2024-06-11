import axios from 'axios'
import React, { useEffect } from 'react'

export default function Find() {
    // Các chức năng tìm kiếm user, tìm kiếm sản phẩm
    // Tìm kiếm những user có chữ cái 
    useEffect(()=> {
        let value:string = "i"
        axios.get(`http://localhost:8080/users?name_like=${value}`)
        .then(res => {
            console.log("Giá trị tìm kiếm", res.data);
            
        })
        .catch(err => console.log(err)
        )
    },[])
    // Tìm kiếm theo chữ cái bắt đầu
    useEffect(() => {
        let valueQuery:string = "h"
        axios.get(`http://localhost:8080/users?name_like=^${valueQuery}`)
        .then(res => {
            console.log("Giá trị tìm kiếm", res.data);
            
        })
        .catch(err => console.log(err)
        )
    },[])
  return (
    <div>Find</div>
  )
}
