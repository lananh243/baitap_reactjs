import React, { useEffect } from "react";
import axios from "axios";
export default function Update() {
  // Khi update dùng 2 phương thức put/patch
  // PUT : update tất cả
  // PATCH : cập nhật 1 vài thuộc tính thôi , các thuộc tính còn lại vẫn giữ nguyên
  useEffect(() => {
    // Khi update phải biết được id của user cần update
    axios.patch("http://localhost:8080/users/1", { name: "Chói chang" });
  }, []);

  useEffect(() => {
    // Khi update phải biết được id của user cần update
    axios.put("http://localhost:8080/users/3", { name: "Mary" });
  }, []);
  return (
    <div>Update</div>
  )
}
