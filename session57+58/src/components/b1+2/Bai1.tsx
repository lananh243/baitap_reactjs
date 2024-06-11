import React, { useEffect, useState } from 'react'
import axios from 'axios'
interface Student {
    id : number,
    studetn_name : string,
    email : string,
    address : string,
    phone : string,
    status : boolean,
    created_at : Date,
}
export default function Bai1() {  
    const [students, setStudent] = useState<Student[]>([])
    useEffect(()=> {
        axios.get("http://localhost:8080/students")
        .then(response => {
          console.log("Giá trị trả về", response.data);
          setStudent(response.data);
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      <h1>Bài 1</h1>
    </div>
  )
}
