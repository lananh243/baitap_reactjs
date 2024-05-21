import React from 'react'
import Hook from './assets/components/Hook'
import UseState from './assets/components/UseState'
import Bai1 from './assets/components/b1/Bai1'
import Bai2 from './assets/components/b2/Bai2'
import Bai3 from './assets/components/b3/Bai3'
import Bai4 from './assets/components/b4/Bai4'
import Bai5 from './assets/components/b5/Bai5'
import Bai6 from './assets/components/b6/Bai6'
import Bai7 from './assets/components/b7/Bai7'
import Bai8 from './assets/components/b8/Bai8'
import Bai9 from './assets/components/b9/Bai9'
import Bai10 from './assets/components/b10/Bai10'

export default function App() {
  return (
    <div>
      <Hook></Hook>
      <UseState></UseState>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
      <Bai10></Bai10>
      {/* 
        Hook : (móc) dùng cho functional component ra đời ở phiên bản
        React 16.8(2018)
        React ra đời năm 2013
        Khi hook chưa ra đời thì function component thì chỉ có nhiệm vụ tạo ra các UI
        function Header(){
          return(
            <div>header</div>
          )
        }
        - Khi mà hook ra đời (móc) bản chất hook là những cái hàm , phương thức đưa vào ,móc vào trong function giúp cho function component có thể làm đc những tính năng như classcomponent
        - Việc các em dùng hook cú pháp ngắn gọn hơn , không cần dùng this(khó hiểu ) như trong class
        - HOOK LÀ NHỮNG CÁI HÀM , PHƯƠNG THỨC
        Các hook phải học
        1. useState
        2. useEffect
        3. memo(HOC - higher order component)
        4. useCallback
        5. useMemo
        6. useContext
        7. useReducer
        .....
       */}
    </div>
  )
}
