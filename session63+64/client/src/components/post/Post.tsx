import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Loading from '../loading/Loading';
import './post.css';

interface Post {
    id: number;
    title: string;
    image: string;
    date: string;
    status: boolean;
}

export default function Post() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [showModal, setShowModal] = useState(false);
    const [blockedItemId, setBlockedItemId] = useState<number | null>(null);
    const [blockedItemStatus, setBlockedItemStatus] = useState<boolean>(false);
    const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
    const [deletePostId, setDeletePostId] = useState<number | null>(null);
    const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
    const [editPostId, setEditPostId] = useState<number | null>(null);
    const [searchValue, setSearchValue] = useState ("");
    const [editPost, setEditPost] = useState<Post>({
        id: 0,
        title: '',
        image: '',
        date: '',
        status: false,
    });
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        setShowModal(false);
        setShowModalAdd(false);
        setShowModalDelete(false);
        setShowModalEdit(false);
        setError(null);
        setEditPost({ id: 0, title: '', image: '', date: '', status: false });
    };

    const handleConfirm = () => {
        if (blockedItemId !== null) {
            const updatedPosts = posts.map(post => {
                if (post.id === blockedItemId) {
                    return { ...post, status: !post.status };
                }
                return post;
            });
            setPosts(updatedPosts);
        }
        handleClose();
    };

    const handleShowModal = (postId: number, currentStatus: boolean) => {
        setBlockedItemId(postId);
        setBlockedItemStatus(currentStatus);
        setShowModal(true);
    };

    const handleShowAddModal = () => {
        setShowModalAdd(true);
    };

    const handleshowDeleteModal = (postId: number) => {
        setDeletePostId(postId);
        setShowModalDelete(true);
    };

    const handleShowEditModal = (id: number) => {
        setEditPostId(id);
        setShowModalEdit(true);
        const postToEdit = posts.find(post => post.id === id);
        if (postToEdit) {
            setEditPost(postToEdit);
        }
    };

    const getPosts = () => {
        axios.get('http://localhost:8080/posts')
            .then(res => {
                setTimeout(() => {
                    setIsLoad(false);
                    setPosts(res.data);
                }, 3000);
            })
            .catch(err => console.log(err));
    };

    const handleAddPost = () => {
        if (!validateInput()) {
            return;
        }

        axios.post('http://localhost:8080/posts', editPost)
            .then(res => {
                setPosts([...posts, res.data]);
                setEditPost({
                    id: 0,
                    title: '',
                    image: '',
                    date: '',
                    status: false,
                });
                setShowModalAdd(false);
            })
            .catch(err => console.log(err));
    };

    const handleDeletePost = () => {
        if (deletePostId) {
            axios.delete(`http://localhost:8080/posts/${deletePostId}`)
                .then(() => {
                    getPosts();
                    handleClose();
                })
                .catch(err => console.log(err));
        }
    };

    const handleEditPost = () => {
        if (editPostId) {
            axios.put(`http://localhost:8080/posts/${editPostId}`, editPost)
                .then(() => {
                    getPosts();
                    handleClose();
                })
                .catch(err => console.log(err));
        }
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);
        axios.get(`http://localhost:8080/posts?title_like=${value}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getPosts();
    }, []);

    const validateInput = (): boolean => {
        if (!editPost.title || !editPost.image || !editPost.date) {
            setError('Tên bài viết, hình ảnh và ngày viết không được để trống.');
            return false;
        }

        const existingPost = posts.find(post => post.title === editPost.title && post.id !== editPostId);
        if (existingPost) {
            setError('Tên bài viết đã tồn tại. Vui lòng chọn tên khác.');
            return false;
        }

        setError(null);
        return true;
    };

    return (
        <>
            <div className='container'>
                <input
                    type='text'
                    className='mx-8 border-solid border-2 border-grey-600 mt-6 w-[300px] rounded h-[32px]'
                    placeholder='Nhập từ khóa tìm kiếm'
                    value={searchValue}
                    onChange={handleSearch}
                />
                <select name='' id='' className='mx-10 border-solid border-2 border-grey-600 rounded w-[150px] h-[32px]'>
                    <option value=''>Lọc bài viết</option>
                </select>
                <button
                    className='mx-10 border-solid border-2 border-grey-600 rounded w-[150px] h-[32px] float-end mt-8 bg-blue-400 text-slate-50'
                    onClick={handleShowAddModal}
                >
                    Thêm bài viết
                </button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Ngày viết</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoad ? <Loading /> : ''}
                        {posts.map((post, index) => (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>
                                    <img src={post.image} alt='' />
                                </td>
                                <td>{post.date}</td>
                                <td>
                                    <button className={`border-solid border-2 border-gray-400 rounded bg-orange-200 text-gray-400`}>
                                        {post.status ? 'Đã xuất bản' : 'Ngừng xuất bản'}
                                    </button>
                                </td>
                                <td>
                                    <div className='flex justify-evenly'>
                                        <button className='border-solid border-2 border-gray-400 rounded bg-orange-500 text-slate-100' onClick={() => handleShowModal(post.id, post.status)}>
                                            {post.status ? 'Bỏ Chặn' : 'Chặn'}
                                        </button>
                                        <button className='border-solid border-2 border-gray-400 rounded bg-orange-200 text-gray-400' onClick={() => handleShowEditModal(post.id)}>
                                            Sửa
                                        </button>
                                        <button className='border-solid border-2 border-gray-400 rounded bg-orange-200 text-gray-400' onClick={() => handleshowDeleteModal(post.id)}>
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Xác Nhận */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận chặn bài viết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {blockedItemStatus ? '⚠ Bạn có chắc chắn muốn ngừng xuất bản bài viết này?' : '⚠ Bạn có chắc chắn muốn xuất bản bài viết này?'}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant='primary' onClick={handleConfirm}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm */}
            <Modal show={showModalAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm bài viết mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tiêu đề</Form.Label>
                            <Form.Control
                                type='text'
                                value={editPost.title}
                                onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Link hình ảnh</Form.Label>
                            <Form.Control
                                type='text'
                                value={editPost.image}
                                onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Ngày viết</Form.Label>
                            <Form.Control
                                type='text'
                                value={editPost.date}
                                onChange={(e) => setEditPost({ ...editPost, date: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                    {error && <p className='text-danger'>{error}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant='primary' onClick={handleAddPost}>
                        Xuất bản
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Xóa */}
            <Modal show={showModalDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa bài viết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`⚠ Bạn có chắc chắn muốn xóa bài viết này?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant='danger' onClick={handleDeletePost}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Sửa */}
            <Modal show={showModalEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sửa bài viết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tiêu đề</Form.Label>
                            <Form.Control
                                type='text'
                                value={editPost.title}
                                onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Link hình ảnh</Form.Label>
                            <Form.Control
                                type='text'
                                value={editPost.image}
                                onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Ngày viết</Form.Label>
                            <Form.Control
                                type='text'
                                value={editPost.date}
                                onChange={(e) => setEditPost({ ...editPost, date: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                    {error && <p className='text-danger'>{error}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant='primary' onClick={handleEditPost}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
