import React from 'react'

export default function Bai11() {
  return (
    <div>
        {/* API sắp xếp bài viết theo thời gian tăng dần. */}
        http://localhost:8080/post?_sort=created_at&_order=asc

        http://localhost:8080/comments?_sort=created_at&_order=asc
    </div>
  )
}
