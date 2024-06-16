import React, { useEffect, useState } from "react";
import "./todolist.css";
import axios from "axios";
interface Jobs {
  id: number;
  name: string;
  status: boolean;
}
export default function TodoList() {
    const [jobs, setJob] = useState<Jobs[]>([]);
    const [nameError, setNameError] = useState<string>("");
    const [newJob, setNewJob] = useState<string>("");
    const [deleteJobId, setDeleteJobId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const getData = () => {
        setLoading(true);
        axios
        .get("http://localhost:8080/jobs")
        .then((res) => {
            setTimeout(() => {
               setJob(res.data);
                setLoading(false) 
            }, 3000);
            
        })
        .catch((err) => {
            console.log(err)
            setLoading(false);
        });

    }
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
            .post("http://localhost:8080/jobs", { name: newJob.trim(), status: false })
            .then((res) => {
                setJob([...jobs, res.data]);
                setNewJob("");
                document.getElementById("jobInput")?.focus();
            })
            .catch((err) => console.log(err));
    }
    const handleDelete = (id:number) => {
        axios.delete(`http://localhost:8080/jobs/${id}`)
        .then(() => {
            setDeleteJobId(null);
            getData();
        })
        .catch(err => console.log(err))
    }
    const confirmDelete = (id: number) => {
        const confirmDelete = window.confirm("Bạn có muốn xóa công việc này không?");
        if (confirmDelete) {
          handleDelete(id);
        }
      };
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
                borderRadius:"5px",
            }}
        >
        <h1 style={{display:"flex", justifyContent:"center"}}>Quản lí công việc</h1>
        <div className="box-1">
            <input type="text" placeholder="Nhập tên công việc" className="input" value={newJob} onChange={(e) => {setNewJob(e.target.value); setNameError("")}} id="jobInput"/>
            {nameError && <div className="input-error">{nameError}</div>}
            <br />
            <button className="button" onClick={handleAddJob}>Thêm công việc</button>
        </div>
        <br />
        <br />
        <div className="statusJob">
            <div className="dilate">
            <button className="status">Tất cả</button>
            <button className="status">Hoàn thành</button>
            <button className="status">Đang thực hiện</button>
            </div>
        </div>
        <div className="job-list">
            {jobs.map((job) => {
                return(
                    <div className="job">
                        <ul key={job.id}>
                            <li>
                                <input type="checkbox" style={{ marginRight: "7px" }} />
                                {job.name}
                            </li>
                            <li>
                                <i className="fa-solid fa-pen" style={{color:"yellowgreen"}}></i>
                                <i className="fa-solid fa-trash" style={{ marginLeft: "25px", color:"red"}} onClick={() => confirmDelete(job.id)}></i>
                            </li>
                        </ul>
                    </div>  
                )
            })}
        </div>
        <div style={{ margin: "auto", display: "flex", justifyContent:"space-between", width: "550px", marginTop:"60px"}}>
            <button className="btn">Xóa công việc hoàn thành</button>
            <button className="btn">Xóa tất cả công việc</button>
        </div>
        </div>
    </>
    

    
    
  );
}
