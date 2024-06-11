import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Student {
  id: number,
  student_name: string,
  email: string,
  address: string,
  phone: string,
  status: boolean,
  created_at: string,
}

export default function Bai7() {
  const [students, setStudent] = useState<Student[]>([])
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  useEffect(() => {
    axios.get("http://localhost:8080/students")
      .then(response => {
        setStudent(response.data);
        setShowModal(true);
        
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (student: Student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedStudent) {
      axios.delete(`http://localhost:8080/students/${selectedStudent.id}`)
        .then((res) => {
          setStudent(res.data);
          setShowModal(false);
        })
        .catch(err => console.log(err));
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div style={{ width: "900px", border: "1px solid black", margin: "auto" }}>
        <div style={{ width: "870px", margin: "auto", height: "50px", backgroundColor: "brown", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
          <h2>Quản lí sinh viên</h2>
          <p>
            <button style={{ width: "160px", height: "30px", backgroundColor: "green", color: "white" }}>
              <i style={{ backgroundColor: "white", borderRadius: "50%", width: "15px", height: "15px", color: "black" }} className="fa-solid fa-plus"></i>
              Thêm mới sinh viên
            </button>
          </p>
        </div>
        <div style={{ width: "870px", margin: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Tên sinh viên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Lựa chọn</th>
              </tr>
            </thead>
            <tbody>
              {students.map(item => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.student_name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                  <td style={{ gap: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <i style={{ color: 'yellow' }} className="fa-solid fa-pen"></i>
                    <i style={{ color: 'red' }} className="fa-solid fa-trash" onClick={() => handleDelete(item)}></i>
                  </td>
                </tr>
              ))}
              <td></td>
            </tbody>
          </table>
        </div>
      </div>
      {showModal && selectedStudent && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Xác nhận xóa</h2>
          <p>Bạn có chắc chắn muốn xóa sinh viên này?</p>
          <button onClick={confirmDelete}>Xóa</button>
          <button onClick={cancelDelete}>Hủy</button>
        </div>
      )}
    </div>
  )
}