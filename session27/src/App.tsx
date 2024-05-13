import React from 'react'
import Bai1 from './assets/components/Bai1'
import Bai2 from './assets/components/Bai2'
import Bai3 from './assets/components/Bai3'
import Bai4 from './assets/components/Bai4'
import Bai5 from './assets/components/Bai5'
import Bai6 from './assets/components/Bai6'
import Header from './assets/components/Header'
import Menu from './assets/components/Menu'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'
import "./App.css"

export default function App() {
  const users = [
    {
      id: 1,
      name: "Macel",
      dateOfBirth: "12/12/2022",
      gender: "Nam",
      address: "Hà Nội"
    },
    {
      id: 2,
      name: "Maria",
      dateOfBirth: "2/09/2001",
      gender: "Nữ",
      address: "HCM"
    }
  ]
  const students = [
    {
      stt: 1,
      id: 'SV001',
      name: 'Nguyễn Văn A',
      age: 20,
      gender: 'Nam'
    },
    {
      stt: 2,
      id: 'SV002',
      name: 'Nguyễn Văn B',
      age: 21,
      gender: 'Nữ'
    },
    {
      stt: 3,
      id: 'Sv003',
      name: 'Nguyễn Văn C',
      age: 19,
      gender: 'Name'
    }
  ]
  return (
    <>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Header></Header>
      <Menu></Menu>
      <Main></Main>
      <Footer></Footer>

      <div className='container'>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Địa chỉ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=> (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
            ))}
           
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}></td>
            </tr>
          </tfoot>
        </table>
      </div>
  <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div
        className="row d-flex justify-content-center align-items-center
              h-100"
      >
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                Quản lý công việc
              </h3>
              <form
                className="d-flex justify-content-center
                              align-items-center mb-4"
              >
                <div className="form-outline flex-fill">
                  <input type="text" id="form2" className="form-control" />
                  <label className="form-label" htmlFor="form2">
                    Thêm công việc
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-info ms-2"
                >
                  Thêm
                </button>
              </form>
              {/* Tabs navs */}
              <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active">Tất cả công việc</a>
                </li>
              </ul>
              {/* Tabs navs */}
              {/* Tabs content */}
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <ul className="list-group mb-0">
                    <li
                      className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <s>Cras justo odio</s>
                      </div>
                      <div>
                        <a
                          href="#!"
                          className="text-info"
                          title="Sửa công việc"
                        >
                          <i
                            className="fas fa-pencil-alt me-3"
                          />
                        </a>
                        <a
                          href="#!"
                          className="text-danger"
                          title="Xóa công việc"
                        >
                          <i
                            className="fas fa-trash-alt"
                          />
                        </a>
                      </div>
                    </li>
                    <li
                      className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          justify-content-between"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input className="form-check-input" type="checkbox" />
                        Cras justo odio
                      </div>
                      <div>
                        <a
                          href="#!"
                          className="text-info"
                          title="Sửa công việc"
                        >
                          <i
                            className="fas fa-pencil-alt me-3"
                          />
                        </a>
                        <a
                          href="#!"
                          className="text-danger"
                          title="Xóa công việc"
                        >
                          <i
                            className="fas fa-trash-alt"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tabs content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-7">
                  <h5 className="mb-3">
                    <a href="#!" className="text-body">
                      <i className="fas fa-long-arrow-alt-left me-2" />
                      Continue shopping
                    </a>
                  </h5>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have 4 items in your cart</p>
                    </div>
                    <div>
                      <p className="mb-0">
                        <span className="text-muted">Sort by:</span>{" "}
                        <a href="#!" className="text-body">
                          price <i className="fas fa-angle-down mt-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                              className="img-fluid rounded-3"
                              alt="Shopping item"
                              style={{ width: 65 }}
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Iphone 11 pro</h5>
                            <p className="small mb-0">256GB, Navy Blue</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">2</h5>
                          </div>
                          <div style={{ width: 80 }}>
                            <h5 className="mb-0">$900</h5>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                              className="img-fluid rounded-3"
                              alt="Shopping item"
                              style={{ width: 65 }}
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Samsung galaxy Note 10 </h5>
                            <p className="small mb-0">256GB, Navy Blue</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">2</h5>
                          </div>
                          <div style={{ width: 80 }}>
                            <h5 className="mb-0">$900</h5>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                              className="img-fluid rounded-3"
                              alt="Shopping item"
                              style={{ width: 65 }}
                            />
                          </div>
                          <div className="ms-3">
                            <h5>Canon EOS M50</h5>
                            <p className="small mb-0">Onyx Black</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">1</h5>
                          </div>
                          <div style={{ width: 80 }}>
                            <h5 className="mb-0">$1199</h5>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3 mb-lg-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                              className="img-fluid rounded-3"
                              alt="Shopping item"
                              style={{ width: 65 }}
                            />
                          </div>
                          <div className="ms-3">
                            <h5>MacBook Pro</h5>
                            <p className="small mb-0">1TB, Graphite</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">1</h5>
                          </div>
                          <div style={{ width: 80 }}>
                            <h5 className="mb-0">$1799</h5>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card bg-primary text-white rounded-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Card details</h5>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          className="img-fluid rounded-3"
                          style={{ width: 45 }}
                          alt="Avatar"
                        />
                      </div>
                      <p className="small mb-2">Card type</p>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-mastercard fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-visa fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-amex fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-paypal fa-2x" />
                      </a>
                      <form className="mt-4">
                        <div className="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            siez={17}
                            placeholder="Cardholder's Name"
                          />
                          <label className="form-label" htmlFor="typeName">
                            Cardholder's Name
                          </label>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            siez={17}
                            placeholder="1234 5678 9012 3457"
                            minLength={19}
                            maxLength={19}
                          />
                          <label className="form-label" htmlFor="typeText">
                            Card Number
                          </label>
                        </div>
                        <div className="row mb-4">
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                placeholder="MM/YYYY"
                                size={7}
                                minLength={7}
                                maxLength={7}
                              />
                              <label className="form-label" htmlFor="typeExp">
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input
                                type="password"
                                id="typeText"
                                className="form-control form-control-lg"
                                placeholder="●●●"
                                size={1}
                                minLength={3}
                                maxLength={3}
                              />
                              <label className="form-label" htmlFor="typeText">
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">$4798.00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">$4818.00</p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-info btn-block btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>$4818.00</span>
                          <span>
                            Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ms-2" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-primary btn-icon-text">
                Thêm mới sinh viên
              </button>
            </div>
            <div className="col-6">
              <form className="search-form" action="#">
                <i className="icon-search" />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                />
                <button className="btn btn-primary btn-icon-text">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control">
                <option value="">Sắp xếp</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
              </select>
            </div>
          </div>
        </div>
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr>
                  <td>{student.stt}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                      >
                        Xem
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* END LIST STUDENT */}
      </div>
    </div>
    {/* START FORM SINH VIEN */}
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* END FORM SINH VIÊN */}
  </div>
</>
  )
}
