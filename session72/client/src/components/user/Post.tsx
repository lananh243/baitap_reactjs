import React, { useEffect, useState } from "react";
import "./post.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  getAllPost,
  searchNamePost,
  sortNamePost,
  updateStatus,
} from "../../store/reducers/postReducer";
import { Button, Modal } from "react-bootstrap";

export default function Post() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const [isShow, setIsShow] = useState(true);
  const [showErr, setShowErr] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    category: "",
    date: "",
    status: "",
    content: "",
  });

  const handleCloseErr = () => setShowErr(false);
  const handleShowErr = () => setShowErr(true);

  const showPostList = () => {
    setIsShow(true);
  };

  const showAddNewPost = () => {
    setIsShow(false);
  };

  const handleInChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (validateInput()) {
      dispatch(addPost(newPost));
      setNewPost({
        title: "",
        image: "",
        category: "",
        date: "",
        status: "",
        content: "",
      });
      showPostList();
    } else {
      handleShowErr();
    }
  };

  const [errors, setErrors] = useState({
    title: "",
    image: "",
    category: "",
    date: "",
    status: "",
    content: "",
    duplicateTitle: false,
  });

  const validateInput = () => {
    let valid = true;
    const { title, image, category, date, status, content } = newPost;
    const newErrors = {
      title: "",
      image: "",
      category: "",
      date: "",
      status: "",
      content: "",
      duplicateTitle: false,
    };

    if (!title.trim()) {
      newErrors.title = "Tên bài viết không được để trống";
      valid = false;
    }
    if (!image.trim()) {
      newErrors.image = "Hình ảnh không được để trống";
      valid = false;
    }
    if (!category.trim()) {
      newErrors.category = "Thể loại không được để trống";
      valid = false;
    }
    if (!date.trim()) {
      newErrors.date = "Ngày viết không được để trống";
      valid = false;
    }
    if (!status.trim()) {
      newErrors.status = "Trạng thái không được để trống";
      valid = false;
    }
    if (!content.trim()) {
      newErrors.content = "Nội dung không được để trống";
      valid = false;
    }
    if (
      data.postReducer.posts.some((post: any) => post.title === title) &&
      title !== ""
    ) {
      newErrors.duplicateTitle = true;
      newErrors.title = "Tên bài viết đã tồn tại, vui lòng chọn tên khác";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSort = () => {
    dispatch(sortNamePost());
  };
  const handleSearch = () => {
    dispatch(searchNamePost(searchText));
  };
  /////////ham update trang thai
  const handleClock = (item: any) => {
    let confirm = window.confirm(
      "Bạn có chắc chắn muốn ngừng xuất bản bài viết ??"
    );
    if (confirm) {
      let newPost: any = {
        ...item,
        status: "Ngừng xuất bản",
      };
      dispatch(updateStatus(newPost));
    }
  };
  // hàm update trạng thái
  const handleEye = (item: any) => {
    let newStatusPost: any = {
      ...item,
      status: "Đã xuất bản",
    };
    dispatch(updateStatus(newStatusPost));
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h4 onClick={showPostList}>Danh sách bài viết</h4>
          <h4 onClick={showAddNewPost}>Thêm mới bài viết</h4>
        </div>
        <hr />
        {isShow ? (
          <>
            <div className="navbar">
              <select name="" id="" onChange={handleSort}>
                <option value="">Sắp xếp theo tên</option>
              </select>
              <input
                type="text"
                placeholder="Tìm kiếm bài viết theo tên"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <img
                onClick={handleSearch}
                width={20}
                height={20}
                src="../../../public/loading.png"
                alt="img"
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tiêu đề</th>
                  <th
                    style={{
                      width: "fit-content",
                    }}
                  >
                    Hình ảnh
                  </th>
                  <th>Thể loại</th>
                  <th>Ngày viết</th>
                  <th>Trạng thái</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {data.postReducer.posts.map((post: any, index: number) => (
                  <tr key={post.id}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td style={{ display: "flex", justifyContent: "center " }}>
                      <img src={post.image} alt="" />
                    </td>
                    <td>{post.category}</td>
                    <td>{post.date}</td>
                    <td>{post.status}</td>
                    <td>
                      <button
                        onClick={() => handleClock(post)}
                        style={{
                          width: "40px",
                          height: "35px",
                        }}
                      >
                        <i className="fa-solid fa-lock"></i>
                      </button>
                      <button
                        onClick={() => handleEye(post)}
                        style={{
                          width: "40px",
                          height: "35px",
                          marginLeft: "25px",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="footer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p>
                  Số lượng <i>{data.postReducer.posts.length}</i> bản ghi
                </p>

                <div style={{ display: "flex", gap: "20px" }}>
                  <select name="" id="">
                    <option value="">20 bản ghi trên 1 trang</option>
                    <option value="">30 bản ghi trên 1 trang</option>
                    <option value="">10 bản ghi trên 1 trang</option>
                  </select>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button>Trước</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>Sau</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <br />
            <div style={{ marginTop: "25px", margin: "0 35px" }}>
              <b>Tên bài viết</b>
              <br />
              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInChange}
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "30px",
                }}
              />
              <br />
              <br />
              <b>Hình ảnh</b>
              <br />
              <input
                type="text"
                name="image"
                value={newPost.image}
                onChange={handleInChange}
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "30px",
                }}
              />
              <br />
              <br />
              <b>Thể loại</b>
              <br />
              <select
                name="category"
                value={newPost.category}
                onChange={handleInChange}
                id=""
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "30px",
                }}
              >
                <option value=""></option>
                <option value="Lập trình web">Lập trình web</option>
                <option value="Ngôn ngữ lập trình">Ngôn ngữ lập trình</option>
                <option value="Khác">Khác</option>
              </select>
              <br />
              <br />
              <b>Ngày viết</b>
              <br />
              <input
                name="date"
                value={newPost.date}
                onChange={handleInChange}
                type="text"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "30px",
                }}
              />

              <br />
              <br />
              <b>Trạng thái</b>
              <br />
              <input
                name="status"
                value={newPost.status}
                onChange={handleInChange}
                type="text"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "30px",
                }}
              />
              <br />
              <br />
              <b>Nội dung</b>
              <br />
              <textarea
                name="content"
                value={newPost.content}
                onChange={handleInChange}
                id=""
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100px",
                }}
              ></textarea>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100px",
                    height: "35px",
                    backgroundColor: "darkblue",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  Xuất bản
                </button>
              </div>
            </div>
          </>
        )}
        <Modal show={showErr} onHide={handleCloseErr} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Cảnh báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
            {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
            {errors.category && (
              <p style={{ color: "red" }}>{errors.category}</p>
            )}
            {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
            {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}
            {errors.content && <p style={{ color: "red" }}>{errors.content}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseErr}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
