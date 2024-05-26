import React from 'react'
import { Employee } from '../models/Employee';
type Props = {
    index: number;
    employee: Employee;
    showModal: (id: number) => void;
    toggleStatus: (id: number) => void;
}
export default function StudentItem( {index, employee, showModal, toggleStatus}:Props ) {
  return (
    <>
        <td>{index + 1}</td>
        <td>{employee.employeeName}</td>
        <td>{employee.dateOfBirth}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {
                employee.status ? (
                    <>
                        <div className="status status-active" />
                        <span> Đang hoạt động</span> 
                    </>
                ) : (
                    <>
                        <div className="status status-stop" />
                        <span> Ngừng hoạt động</span> 
                    </>
                )
            }
            
        </div>
        </td>
        <td>
            <span onClick={() => toggleStatus(employee.id)} className="button button-block">
                {employee.status ? "Chặn" : "Bỏ chặn"}
            </span>
        </td>
        <td>
        <span className="button button-edit">Sửa</span>
        </td>
        <td>
        <span onClick={() => showModal(employee.id)} className="button button-delete">Xóa</span>
        </td>
    </>
  )
}
