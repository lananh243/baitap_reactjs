import React from 'react'
import Parent from './assets/components/Parent'

export default function App() {
  return (
    <div>App
      <p>props : properties
       - dùng để truyền , gửi dữ liệu từ component cha xuống component con
       - thế nào là component cha ?
       - thế nào là component con ?
       - component cha chứa component con 
      </p>
      <p>state</p>
      <Parent></Parent>
    </div>
  )
}
