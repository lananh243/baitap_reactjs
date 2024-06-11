import axios from 'axios';
import React, { useEffect } from 'react'

export default function Bai6() {
    const updateStudentById = (id:number) => {
        axios.put(`http://localhost:8080/students/${id}`, { student_name: "Nga", email : "nga@gmail.com", address:"Phan Thiết", phone: "072872778", status : false, created: "6/1/2022" })
        .then((response) => {
            console.log("Giá trị của mảng students sau khi cập nhật thông tin theo id là : ",response.data);
            
        })
    }
    useEffect(() => {
        updateStudentById(14)
    }, []);
  return (
    <div>Bai6</div>
  )
}
