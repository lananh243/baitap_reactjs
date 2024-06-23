import React, { useState } from 'react'
import "./book.css"
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BookTodo } from '../../interface';
export default function Book() {
    const [titleBook, setTitleBook] = useState<string>("");
    const [nameStudent, setNameStudent] = useState<string>("");
    const [borrowDay, setBorrowDay] = useState<string>("");
    const [payDay, setPayDay] = useState<string>("");
    const dispatch = useDispatch();
    const handleClose = () => {
        setTitleBook("");
        setNameStudent("");
        setBorrowDay("");
        setPayDay("");
        setShow(false);
    };
    const addBook = () => {
        let newBook = {
            id:Math.floor(Math.random()*100000),
            titleBook: titleBook,
            nameStudent: nameStudent,
            borrowDay: borrowDay,
            payDay: payDay,
            status:false
        }
        dispatch ({
            type: "ADD_TODO",
            payload: newBook
        })
        handleClose();
    }
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const books:any = useSelector(state => {
        return state;
    });
    const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        let valueTitle = e.target.value;
        setTitleBook(valueTitle)
    }
    const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        let valueName = e.target.value;
        setNameStudent(valueName)
    }
    const handleBorrowDay = (e:React.ChangeEvent<HTMLInputElement>) => {
        let valueBorrowDay = e.target.value;
        setBorrowDay(valueBorrowDay)
    }
    const handlePayDay = (e:React.ChangeEvent<HTMLInputElement>) => {
        let valuePayDay = e.target.value;
        setPayDay(valuePayDay)
    }
    const [showModal, setShowModal] = useState(false);
    const handleCloseModalDelete = () => {
        setShowModal(false);
        setDeleteId(null);
    };
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const handleDelete = (id:number) => {
        setDeleteId(id);
        setShowModal(true)
    };
    const confirmDelete = () => {
        if (deleteId !== null) {
            dispatch({
                type: "DELETE_TODO",
                payload: deleteId,
            });
            setShowModal(false);
            setDeleteId(null)
        }
    }

    const [editBookId, setEditBookId] = useState<number | null>(null);
    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const handleCloseEdit = () => {
        setTitleBook("");
        setNameStudent("");
        setBorrowDay("");
        setPayDay("");
        setEditBookId(null);
        setModalEdit(false)
    };

    const handleShowEdit = (id:number) => {
        setEditBookId(id);
        const bookToEdit = books.bookReducer.find((book: BookTodo) => book.id === id);
        if (bookToEdit) {
            setTitleBook(bookToEdit.titleBook);
            setNameStudent(bookToEdit.nameStudent);
            setBorrowDay(bookToEdit.borrowDay);
            setPayDay(bookToEdit.payDay)
        }
        setModalEdit(true)
    };

    const updateBook = () => {
        if (editBookId !== null) {
            const updateBook = {
                id: editBookId,
                titleBook: titleBook,
                nameStudent: nameStudent,
                borrowDay: borrowDay,
                payDay: payDay,
                status:false
            }
            dispatch ({
                type: "UPDATE_TODO",
                payload: updateBook
            })
            handleCloseEdit();
        }
    }
  return (
    <>
        <div className='container'>
            <div style={{display:"flex", justifyContent:"space-between"}}>
               <h2 style={{marginTop:"20px"}}>Quản lí mượn trả sách</h2>
               <button style={{backgroundColor:"darkslateblue", color:"white", borderRadius:"5px", marginTop:"20px"}} onClick={handleShow}>Thêm thông tin</button>  
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Thêm thông tin mượn sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tên sách</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChangeTitle}
                    />
                    <Form.Label>Tên người mượn</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChangeName}
                    />
                    <Form.Label>Ngày mượn</Form.Label>
                    <Form.Control
                        placeholder='mm/dd/yyyy'
                        type="date"
                        onChange={handleBorrowDay}
                    />
                    <Form.Label>Ngày trả</Form.Label>
                    <Form.Control
                        placeholder='mm/dd/yyyy'
                        type="date"
                        onChange={addBook}
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button style={{width:"100%"}} variant="primary" onClick={handleClose}>
                    Thêm
                </Button>
                </Modal.Footer>
            </Modal>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sách</th>
                        <th>Sinh viên mượn</th>
                        <th>Ngày mượn</th>
                        <th>Ngày trả</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {books.bookReducer.map((book:BookTodo, index:number) => {
                        return (
                            <tr key={book.id}>
                                <td>{index + 1}</td>
                                <td>{book.titleBook}</td>
                                <td>{book.nameStudent}</td>
                                <td>{book.borrowDay}</td>
                                <td>{book.payDay}</td>
                                <td style={{width:"150px"}}>
                                    <button style={{width:"100px", borderRadius:"20px", backgroundColor:"yellowgreen", border:"none"}}>Đã trả</button>
                                </td>
                                <td style={{display:"flex", justifyContent:"space-evenly"}}>
                                    <button style={{color:"yellowgreen", border: "1px solid gray", borderRadius:"5px"}} onClick={() => {handleShowEdit(book.id)}}>Sửa</button>
                                    <button style={{color:"red", border: "1px solid gray", borderRadius:"5px"}} onClick={() => handleDelete(book.id)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            <Modal show={showModal} onHide={handleCloseModalDelete} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa thông tin người mượn trả sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa thông tin của người mượn này ???</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalDelete}>
                        Hủy
                    </Button>
                <Button variant="primary" onClick={confirmDelete}>
                    Xác nhận
                </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={modalEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                <Modal.Title>Cập nhật thông tin mượn sách</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tên sách</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChangeTitle}
                        value={titleBook}
                    />
                    <Form.Label>Tên người mượn</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChangeName}
                        value={nameStudent}
                    />
                    <Form.Label>Ngày mượn</Form.Label>
                    <Form.Control
                        placeholder='mm/dd/yyyy'
                        type="date"
                        onChange={handleBorrowDay}
                        value={borrowDay}
                    />
                    <Form.Label>Ngày trả</Form.Label>
                    <Form.Control
                        placeholder='mm/dd/yyyy'
                        type="date"
                        onChange={handlePayDay}
                        value={payDay}
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button style={{width:"100%"}} variant="primary" onClick={updateBook}>
                    Cập nhật
                </Button>
                
                </Modal.Footer>
            </Modal>
        </div>
    </>
  )
}
