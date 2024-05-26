import React, { useState } from 'react'
import { Employee } from '../models/Employee';
import { formatDate } from '../utils/formatData';
import { validateEmail } from '../utils/validateData';
import { saveData } from '../utils/saveData';

type Props = {
    onClose: () => void;

}
export default function Form({onClose}: Props) {
    // state chứa dữ liệu của dối tượng nhân viên
    const [employee, setEmployee] = useState<Employee>({
        id: 0,
        employeeName: "",
        dateOfBirth: "",
        email: "",
        address: "",
        status: true
    });
    const [nameError, setNameError] = useState<string>(""); //Lỗi tên 
    const [dateOfBirthError, setDateOfBirthError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    // state lưu trữ danh sách nhân viên
    const [employeeList, setEmpoyeeList] = useState<Employee[]>(()=> {
        const employeeLocal = localStorage.getItem("students");

        return employeeLocal ? JSON.parse(employeeLocal) : [] ;
    })
    // Validate dữ liệu đầu vào
    const validateData = (name: string, value: string) => {
        let isFlag = true;
        if(name === "employeeName"){
            if(!value){
                setNameError("Tên không được để trống.");
                isFlag = false
            }else{
                setNameError("");
            }
        }
        if(name === "dateOfBirth"){
            if(!value){
                isFlag = false
                setDateOfBirthError("Ngày sinh không được để trống.");
            }else{
                // kiểm tra ngày sinh có đc lớn hơn ngày hiện tại hay ko
                if(formatDate(value) > formatDate(new Date().toString())){
                    isFlag = false
                    setDateOfBirthError("Ngày sinh ko được lớn hơn ngày hiện tại");
                }else{
                    setDateOfBirthError("");
                }
                
            }
        }
        if(name === "email"){
            if(!value){
                setEmailError("Email không được để trống.");
                isFlag = false
            }else{
                if(!validateEmail(value)){
                    setEmailError("Email ko đúng định dạng");
                    isFlag = false
                }else{
                    setEmailError("");
                }
                
            }
        }
        return isFlag;
    }
    // Hàm lấy giá trị trong ô input
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        // cập nhật lại state cho đối tượng employee
        setEmployee({
            ...employee,
            [name]: value,
        })
        // gọi hàm validate mỗi khi change dữ liệu 
        validateData(name, value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Ngăn chặn sự kiện load lại trang
        e.preventDefault();
        // gọi hàm validate dữ liệu khi nhấn nút submit
        const nameIsFlag = validateData("employeeName",employee.employeeName);
        const dateIsFlag = validateData("dateOfBirth",employee.dateOfBirth);
        const emailIsFlag = validateData("email",employee.email)
        if(nameIsFlag && dateIsFlag && emailIsFlag){
            // thêm mới nhân viên trên local
            const updateEmployeeLocals = [
                ...employeeList, 
                {...employee, id: Math.ceil(Math.random() * 10000)}];
            // Lưu trữ dữ liệu trên localStorge
            saveData("students", updateEmployeeLocals);
            // đóng form thêm mới
            onClose();

        }
    }
  return (
    <>
        {/* Form thêm mới nhân viên */}
        <div className="overlay">
            <form className="form" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center">
                <h4>Chỉnh sửa nhân viên</h4>
                <i onClick={onClose} className="fa-solid fa-xmark" />
            </div>
            <div>
                <label className="form-label" htmlFor="userName">
                Họ và tên
                </label>
                <input onChange={handleChangeInput} name='employeeName' type="text" className="form-control" />
                {
                    nameError && (
                        <div className="form-text error">{nameError}</div>
                    )
                }
            </div>
            <div>
                <label className="form-label" htmlFor="dateOfBirth">
                Ngày sinh
                </label>
                <input onChange={handleChangeInput} name='dateOfBirth' type="date" className="form-control" />
        </div>
        {dateOfBirthError && (
            <div className="form-text error">
                {dateOfBirthError}
            </div>
        )}
        
            <div>
                <label className="form-label" htmlFor="email">
                Email
                </label>
                <input onChange={handleChangeInput} name='email' type="text" className="form-control" />
            </div>
            {emailError && (
                <div className="form-text error">{emailError}</div>
            )}
            
            <div>
                <label className="form-label" htmlFor="address">
                Địa chỉ
                </label>
                <textarea
                onChange={handleChangeInput}
                className="form-control"
                name='address'
                rows={3}
                defaultValue={""}
                />
            </div>
            <div>
                <button type='submit' className="w-100 btn btn-primary">Thêm mới</button>
            </div>
            </form>
        </div>
    </>
    )
}