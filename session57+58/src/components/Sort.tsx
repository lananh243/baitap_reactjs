import axios from 'axios'
import React, { useEffect } from 'react'

export default function Sort() {
    // Tiến hành sắp xếp theo những điều kiện
    // - tăng dần và giảm dần
    useEffect(() => {
        // Sắp xếp theo tuổi tăng dần trong bảng users
        axios.get("http://localhost:8080/users?_sort=age&_order=asc")
        .then((res) => {
            console.log("Sau khi sắp xếp", res.data);
            
        })
        .catch((err)=> console.log(err))
    },[])
  return (
    <div>

    </div>
  )
}
