import React, { useState } from 'react'
import Form from '../base/Form'
import StudentItem from './StudentItem';
import Button from '../base/Button';
import Input from '../base/Input';
import { Employee } from '../models/Employee';
import Modal from '../base/Modal';
import { saveData } from '../utils/saveData';

export default function ListStudent() {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false)
    const [idDelete, setIdDelete] = useState<number>(0);
    const [nameDelete, setNameDelete] = useState<string>("");
    const [showModalToggle, setShowModalToggle] = useState<boolean>(false);
    const [idToggle, setIdToggle] = useState<number>(0);
    // state lưu trữ danh sách nhân viên
    const [employeeList, setEmpoyeeList] = useState<Employee[]>(()=> {
        const employeeLocal = localStorage.getItem("students");

        return employeeLocal ? JSON.parse(employeeLocal) : [] ;
    })
    // Hàm hiển thị form 
    const handleShowForm = () => { // state quản lí trạng thái hiển thị của form
        // Cập nhật trạng thái của state showForm
        setShowForm(true);
        
    }

    // Hàm đóng form 
    const handleCloseForm = () => { // state quản lí trạng thái hiển thị của form
        // Cập nhật trạng thái của state showForm
        setShowForm(false)
        
    }
    const handleSearch = () => {
        console.log("Search");
        
    }
    // Hàm hiển thị modal xác nhận xóa
    const handleShowModal = (id: number) => {
        // Cập nhật lại state của showModal
        setIdDelete(id)
        
        setShowModal(true);
        // tìm kiếm thông tin nhân viên của nv cần xóa
        const findEmployee = employeeList.find((employee: Employee) => {
            return employee.id === id;
        });
        if(findEmployee){
           // cập nhật tên của nhân viên cần xóa
            setNameDelete(findEmployee?.employeeName) 
        }
        
    }
    // Ẩn modal xác nhận xóa
    const handleCloseModal = () => {
        setShowModal(false);
    }
    // Hàm xóa thông tin 1 nhân viên khỏi local
    const handleDeleteEmployee = () => {
        // Lọc ra những nv khác với id cần xóa
        const filterEmployee = employeeList.filter((employee: Employee) => {
            return employee.id !== idDelete;
        });
        // lưu mảng vừa lặp lên local
        saveData("students", filterEmployee);
        // Đóng modal
        setShowModal(false)
        // Render lại danh sách nv
        setEmpoyeeList(filterEmployee);
    }
    // Hàm mở modal xác nhận chặn
    const handleShowModalToggle = (id: number) => {
        // Cập nhật trạng thái mở modal
        setShowModalToggle(true)
        // cập nhật state để lấy id cần cập nhật
        setIdToggle(id)
    }
  return (
    <>
        {   
            // show ? <Form/> : <></>
            // showForm === true ? <Form/> : <></>
            showForm && <Form onClose={handleCloseForm}/>   
        }
        {/* Component modal xác nhận xóa*/}
        {showModal && <Modal title='Xác nhận' content={`Bạn có muốn xóa nhân viên ${nameDelete} không ?`} onClose={handleCloseModal} onConfirm={handleDeleteEmployee}></Modal>}
        {/* Component xác nhận chặn */}
        {
            showModalToggle && <Modal></Modal>
        }
        {/* Link font awesome end*/}
        <div className="w-[80%] m-auto mt-4 h-[100vh]">
            <main className="main">
            <header className="d-flex justify-content-between mb-3">
                <h3>Nhân viên</h3>
                <Button
                    onClick={handleShowForm}
                    title='Thêm mới nhân viên'
                    type='primary'
                    size='small'
                ></Button>
            </header>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <Input 
                style={{ width: 350 }}
                type="text"
                placeholder="Tìm kiếm theo tên"
                onChange={handleSearch}
            />
                <i className="fa-solid fa-arrows-rotate" title="Refresh" />
            </div>
            {/* Danh sách nhân viên */}
            <table className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Trạng thái</th>
                    <th colSpan={3}>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                    {employeeList.map((employee: Employee, index: number) => (
                        <tr key={employee.id}>
                            
                           <StudentItem toggleStatus={handleShowModalToggle} showModal={handleShowModal} employee={employee} index={index}></StudentItem> 
                        </tr>  
                    ))}
                </tbody>
            </table>
            <footer className="d-flex justify-content-end align-items-center gap-3">
                <select className="form-select">
                <option>Hiển thị 10 bản ghi trên trang</option>
                <option>Hiển thị 20 bản ghi trên trang</option>
                <option>Hiển thị 50 bản ghi trên trang</option>
                <option>Hiển thị 100 bản ghi trên trang</option>
                </select>
                <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#">
                    Previous
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                    Next
                    </a>
                </li>
                </ul>
            </footer>
            </main>
        </div>
    </>
  )
}
