import React, { useEffect, useState } from 'react'
import "./manager.css"
import axios from "axios"

interface User {
    email:string,
    name:string,
    status:boolean,
    phone:string,
    address:string,
    id:number
}
export default function Manager() {
    // tạo state để lưu trữ danh sách sinh viên
    const [users, setUser] = useState<User[]>([]);
    const [deleteUserId, setDeleteUserId] = useState<number | null>(null)
    const [editUserId, setEditUserId] = useState<number | null>(null)
    const [formData, setFormData] = useState({ email: '', name: '', phone: '', address: '', status: false, id: 0 });
    const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const goToPrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    // lấy danh sách sinh viên
    const fetchUsers = () => {
        axios.get(`http://localhost:8080/users?_page=${currentPage}&_limit=3`)
            .then(res => {
                
                setUser(res.data);
                setTotalUsers(parseInt(res.headers['x-total-count'], 10));
                setTotalPages(Math.ceil(totalUsers / 3));
            })
            .catch(err => console.log(err));
    }

    const handleDelete = (id:number) => {
        axios.delete(`http://localhost:8080/users/${id}`)
        .then(() => {
            setDeleteUserId(null);
            fetchUsers();
            $('#deleteEmployeeModal').modal('hide');
        })
        .catch(err => console.log(err))
    }
    const handleEdit = (id: number) => {
        if (validateForm()) {
          axios
            .put(`http://localhost:8080/users/${id}`, formData)
            .then(() => {
              setEditUserId(null);
              fetchUsers();
              $('#editEmployeeModal').modal('hide');
            })
            .catch((err) => console.log(err));
        }
    };
    useEffect(() => {
        fetchUsers();
    },[currentPage])

    const handleAddUser = () => {
        if (validateForm()) {
            axios.post('http://localhost:8080/users', formData)
                .then(() => {
                    setFormData({ email: '', name: '', phone: '', address: '', status: false, id: 0 });
                    $('#addEmployeeModal').modal('hide');
                    fetchUsers();
                })
                .catch(err => console.log(err));
        }
    };

    const validateForm = () => {
        let formErrors = { name: '', email: '', phone: '' };
        let isValid = true;

        if (!formData.name) {
            formErrors.name = "Tên sinh viên không được để trống";
            isValid = false;
        }

        if (!formData.email) {
            formErrors.email = "Email không được để trống";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email không đúng định dạng";
            isValid = false;
        }

        if (!/^\d+$/.test(formData.phone)) {
            formErrors.phone = "Số điện thoại chỉ được phép nhập số";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  return (
    <>
        <div className="container-xl">
            <div className="table-responsive">
            <div className="table-wrapper">
                <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                    <h2>
                        Quản lý <b>sinh viên</b>
                    </h2>
                    </div>
                    <div className="col-sm-6">
                    <a
                        href="#addEmployeeModal"
                        className="btn
                                    btn-success"
                        data-toggle="modal"
                    >
                        <i className="material-icons"></i>
                        <span>Thêm mới sinh viên</span>
                    </a>
                    </div>
                </div>
                </div>
                <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>
                        <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll" />
                        </span>
                    </th>
                    <th>Tên sinh viên</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Lựa chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>
                                    <span className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        id="checkbox5"
                                        name="options[]"
                                        defaultValue={1}
                                    />
                                    <label htmlFor="checkbox5" />
                                    </span>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>(+84) {item.phone}</td>
                                <td>
                                    <a
                                    href="#editEmployeeModal"
                                    className="edit"
                                    data-toggle="modal"
                                    onClick={() => {
                                        setEditUserId(item.id);
                                        setFormData(item)
                                    }}
                                    >
                                    <i
                                        className="material-icons"
                                        data-toggle="tooltip"
                                        title="Edit"
                                    >
                                        
                                    </i>
                                    </a>
                                    <a
                                    href="#deleteEmployeeModal"
                                    className="delete"
                                    data-toggle="modal"
                                    onClick={() => setDeleteUserId(item.id)}
                                    >
                                    <i
                                        className="material-icons"
                                        data-toggle="tooltip"
                                        title="Delete"
                                    >
                                        
                                    </i>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                <div className="clearfix">
                <div className="hint-text">
                    Hiển thị <b>{users.length}</b>/<b>{totalUsers} </b>bản ghi
                </div>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a href="#" className="page-link" onClick={goToPrevPage}>Trước</a>
                    </li>
                    {[1, 2, 3, 4, 5].map(pageNumber => (
                        <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                        <a href="#" className="page-link" onClick={() => setCurrentPage(pageNumber)}>
                            {pageNumber}
                        </a>
                        </li>
                    ))}
    
                    <li className="page-item">
                    <a href="#" className="page-link" onClick={goToNextPage} >
                        Sau
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        {/* Add Modal HTML */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(e) => { e.preventDefault(); handleAddUser()}}>
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm mới sinh viên</h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tên sinh viên</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && <small className="form-text text-danger">{errors.name}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <small className="form-text text-danger">{errors.email}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea
                                        className="form-control"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && <small className="form-text text-danger">{errors.phone}</small>}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                    defaultValue="Cancel"
                                />
                                <input
                                    type="submit"
                                    className="btn btn-success"
                                    defaultValue="Add"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={(e) => {e.preventDefault(); handleEdit(editUserId)}}>
                    <div className="modal-header">
                        <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                        <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                        >
                        ×
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                        <label>Tên sinh viên</label>
                        <input type="text" className="form-control" value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        </div>
                        <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                        </div>
                        <div className="form-group">
                        <label>Địa chỉ</label>
                        <textarea
                            className="form-control"
                            required
                            defaultValue={""}
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                        </div>
                        <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" className="form-control" value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        defaultValue="Thoát"
                        />
                        <input 
                        type="submit" 
                        className="btn btn-info" 
                        defaultValue="Lưu"
                        />
                    </div>
                    </form>
                </div>
                </div>
         </div>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={(e) => {e.preventDefault(), handleDelete(deleteUserId)}}>
                <div className="modal-header">
                    <h4 className="modal-title">Xóa nhân viên</h4>
                    <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    >
                    ×
                    </button>
                </div>
                <div className="modal-body">
                    <p>Bạn chắc chắn muốn xóa sinh viên&lt;ST001&gt;?</p>
                </div>
                <div className="modal-footer">
                    <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Hủy"
                    />
                    <input
                    type="submit"
                    className="btn btn-danger"
                    defaultValue="Xóa"
                    />
                </div>
                </form>
            </div>
            </div>
        </div>
    </>

  )
}
