import React, { useEffect } from "react";
import axios from "axios";
export default function Delete() {
  // Dùng thư viện axios để xóa user trong bảng users
  // Khi xóa thì dùng phương thức delete
  useEffect(() => {
    // Khi xóa phải truyền id của user cần xóa
    axios.delete("http://localhost:8080/users/2");
  });
  return <div>Delete</div>;
}
