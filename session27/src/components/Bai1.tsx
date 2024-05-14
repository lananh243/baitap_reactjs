import React from 'react'
let course:string[] = ["HTML","CSS","JavaScript","ReactJS"];
export default function Bai1() {
  return (
    <div>
      Bài 1
      <h2>Danh sách khóa học</h2>
      {course.map ((item,index) => {
      return <ul key={index}>
          <ul>{index + 1} : {item}</ul>
      </ul>

      })}
    </div>
  )
}
