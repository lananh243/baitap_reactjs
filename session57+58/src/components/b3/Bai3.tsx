import axios from "axios";
import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created: string;
}

export default function Bai3() {
  const [student, setStudent] = useState<Student | null>(null);

  const getStudentById = (id: number) => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((response) => {
        console.log(`Thông tin của student có id là : ${id}`, response.data);
        setStudent(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStudentById(2);
  }, []);

  return (
    <div>
      <h1>Bài 3</h1>
      <ul>
        <li>Tên sinh viên: {student?.student_name}</li>
        <li>Email: {student?.email}</li>
        <li>Số điện thoại: {student?.phone}</li>
        <li>Địa chỉ: {student?.address}</li>
        <li>
          Trạng thái: {student?.status ? "Hoạt động" : "Không hoạt động"}
        </li>
        <li>Thời gian thêm: {student?.created}</li>
      </ul>
    </div>
  );
}
