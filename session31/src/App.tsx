import React from 'react'
import ClassComponent from './components/ClassComponent'

export default function App() {
  return (
    <div>App
    <ClassComponent></ClassComponent>

      {/* 
        lifecycle - vòng đời của classcomponent
        functional component không có vòng đời
        Vd: 1 con người sẽ có vòng đời
        Sinh ra ==> lớn lên ==> trưởng thành ==> lập sự nghiệp ==> lập gia đình ==> die
        class component nó cũng có vòng đời riêng của nó
        4 giai đoạn 
          giai đoạn 1 : khởi tạo (initial)
            + Đi khởi tạo props và state
          giai đoạn 2 : mounting (gắn vào UI)
          giai đoạn 3 : updating (cập nhật)
          giai đoạn 4 : unmounting (gỡ bỏ khỏi UI)
        )
       */}
    </div>
  )
}
