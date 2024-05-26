import React, { createContext, useState } from 'react'
import A from './A'
export const Context = createContext("");
export default function UseContext() {
    const [name,setName] = useState<string>("Trang");
    // dùng props để gửi dữ liệuname(Trang)
    // component E nhận giá trị trang
    
  return (
    <div>
        usecontext
        {/* 
            sinh ra giúp cho việc truyền dữ liệu giữa các component có quan hệ cha con
            đc nhanh hơn, dễ dàng hơn ko phải truyền theo kiểu props bình thường
            - Các component phải có quan hệ cha con
            - tạo 1 biến gán = createContext("")
            export biến ra
            - dùng biến này bọc component
            <Biến.Provider value={}>
            - component con muốn nhận data 
            useContext(Biến bên trên export)
         */}
         <Context.Provider value={name}>
            <A></A>
         </Context.Provider>
         
    </div>
  )
}
