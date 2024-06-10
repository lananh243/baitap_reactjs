import React from 'react'

export default function Bai6() {
  return (
    <div>
        {/* API lấy thông tin tất cả bài viết theo tác giả  */}
        http://localhost:8080/post?created_by=Tony

        http://localhost:8080/comments?created_by=Phương
    </div>
  )
}
