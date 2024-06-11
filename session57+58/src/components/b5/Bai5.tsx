import axios from 'axios';
import React, { useEffect } from 'react'
interface NewStudent {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created: string;
  }
export default function Bai5() {
   
        const createStudent = (newStd : NewStudent) => {
           axios.post("http://localhost:8080/students", newStd)
           .then((response) => {
            console.log("Giá trị của mảng students sau khi thêm mới là : ",response.data);
            
           })
        };
        useEffect(() => {
            const newStd: NewStudent = {
                student_name: "Mai Trang",
                email: "trang@gmail.com",
                address: "Bắc Ninh",
                phone: "42638981853",
                status: true,
                created: "3/6/2023"
              };
            createStudent(newStd)
        }, []);
  return (
    <div>

    </div>
  )
}
