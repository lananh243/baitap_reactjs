import React, { useEffect, useState } from "react";
import "./todolist.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

interface Jobs {
  id: number;
  name: string;
  status: boolean;
}

export default function TodoList() {
  const [jobs, setJob] = useState<Jobs[]>([]);
  const [nameError, setNameError] = useState<string>("");
  const [newJob, setNewJob] = useState<string>("");
  const [editJobId, setEditJobId] = useState<number | null>(null);
  const [editJob, setEditJob] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [show, setShow] = useState(false);
  

  const handleClose = () => {
    setShow(false);
    setNameError("");
  };

  const handleShow = (job: Jobs) => {
    setEditJobId(job.id);
    setEditJob(job.name);
    setShow(true);
  };

  const getData = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/jobs")
      .then((res) => {
        setTimeout(() => {
          setJob(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddJob = () => {
    if (newJob.trim() === "") {
      setNameError("Tên công việc không được phép để trống");
      return;
    }
    if (jobs.some((job) => job.name === newJob.trim())) {
      setNameError("Tên công việc không được phép trùng");
      return;
    }
    axios
      .post("http://localhost:8080/jobs", {
        name: newJob.trim(),
        status: false,
      })
      .then((res) => {
        setJob([...jobs, res.data]);
        setNewJob("");
        document.getElementById("jobInput")?.focus();
        // sortNameJob();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/jobs/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  const confirmDelete = (id: number) => {
    const confirmDelete = window.confirm("Bạn có muốn xóa công việc này không?");
    if (confirmDelete) {
      handleDelete(id);
    }
  };

  const handleEdit = () => {
    if (editJob.trim() === "") {
      setNameError("Tên công việc không được phép để trống");
      return;
    }
    if (jobs.some((job) => job.name === editJob.trim())) {
      setNameError("Tên công việc không được phép trùng");
      return;
    }
      axios
        .put(`http://localhost:8080/jobs/${editJobId}`, {
          name: editJob.trim(),
        })
        .then(() => {
          setEditJobId(null);
          getData();
          setEditJob("");
          document.getElementById("valueEditJob")?.focus();
          handleClose();
          // sortNameJob();
        })
        .catch((err) => console.log(err));
  };

  const handleCheck = (id: number) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, status: !job.status } : job
    );
    setJob(updatedJobs);
  };

  const handleDeleteCompleted = () => {
    const completedJobs = jobs.filter((job) => job.status);
    if (completedJobs.length === 0) {
      alert("Không có công việc hoàn thành để xóa!");
      return;
    }
    const confirmDelete = window.confirm(`Bạn có muốn xóa ${completedJobs.length} công việc hoàn thành không?`);
    if (confirmDelete) {
      completedJobs.forEach((job) => {
        axios
          .delete(`http://localhost:8080/jobs/${job.id}`)
          .then(() => {
            getData();
          })
          .catch((err) => console.log(err));
      });
    }
  };
  const handleDeleteAll = () => {
    const confirmDeleteAll = window.confirm("Bạn có muốn xóa tất cả công việc ko ??");
    if(confirmDeleteAll){
      axios
      .delete("http://localhost:8080/jobs/all")
      .then((res)=> {
        setJob(res.data)
        getData();
      })
      .catch((err) => console.log(err)
      )
    }
  }
  const sortNameJob = () => {
    axios.get("http://localhost:8080/jobs?_sort=name&_order=asc")
    .then((res) => {
      setJob(res.data)
      // getData()
    })
    .catch(err => console.log(err)
    )
  }
  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div
        className="container"
        style={{
          width: "650px",
          margin: "auto",
          marginTop: "100px",
          borderRadius: "5px",
        }}
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Quản lí công việc
        </h1>
        <div className="box-1">
          <input
            type="text"
            placeholder="Nhập tên công việc"
            className="input"
            value={newJob}
            onChange={(e) => {
              setNewJob(e.target.value);
              setNameError("");
            }}
            id="jobInput"
          />
          {nameError && <div className="input-error">{nameError}</div>}
          <br />
          <button className="but" onClick={handleAddJob}>
            Thêm công việc
          </button>
        </div>
        <br />
        <br />
        <div className="statusJob">
          <div className="dilate">
            <button className="status">Tất cả</button>
            <button className="status">Hoàn thành</button>
            <button className="status" onClick={sortNameJob} style={{backgroundColor:"orangered", color:"whitesmoke"}}>Sắp xếp</button>
          </div>
        </div>
        <div className="job-list">
          {jobs.map((job) => {
            return (
              <div className="job" key={job.id}>
                <ul>
                  <li>
                    <input type="checkbox" style={{ marginRight: "7px" }} checked={job.status}
                    onChange={() => handleCheck(job.id)}/>
                    <span style={{ textDecoration: job.status ? 'line-through' : 'none' }}>
                    {job.name}
                  </span>
                  </li>
                  <li>
                    <i
                      onClick={() => handleShow(job)}
                      className="fa-solid fa-pen"
                      style={{ color: "yellowgreen" }}
                    ></i>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Sửa công việc</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleEdit();
                          }}
                        >
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Giá trị cũ: {jobs.find(job => job.id === editJobId)?.name}</Form.Label>
                            <Form.Control
                              id="valueEditJob"
                              type="text"
                              onChange={(e) => {
                                setEditJob(e.target.value);
                                setNameError("");
                              }}
                            />
                            {nameError && <div className="input-error">{nameError}</div>}
                          </Form.Group>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Hủy
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleEdit}>
                              Cập nhật
                            </Button>
                          </Modal.Footer>
                        </Form>
                      </Modal.Body>
                    </Modal>

                    <i
                      className="fa-solid fa-trash"
                      style={{ marginLeft: "25px", color: "red" }}
                      onClick={() => confirmDelete(job.id)}
                    ></i>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            width: "550px",
            marginTop: "60px",
          }}
        >
          <button className="button" onClick={handleDeleteCompleted}>Xóa công việc hoàn thành</button>
          <button className="button" onClick={handleDeleteAll}>Xóa tất cả công việc</button>
        </div>
      </div>
    </>
  );
}
