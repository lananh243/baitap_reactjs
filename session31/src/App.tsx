// import React, { useState } from "react";
// import ClassComponent from "./components/ClassComponent";
// import Bai1 from "./components/b1/Bai1";
// import Bai2 from "./components/b2/Bai2";
// import Bai3 from "./components/b3/Bai3";
// import Bai4 from "./components/b4/Bai4";
// import Bai5 from "./components/b5/Bai5";
// import Bai6 from "./components/b6/Bai6";
// import Bai7 from "./components/b7/Bai7";
// import Bai8 from "./components/b8/Bai8";
// import Bai9 from "./components/b9/Bai9";

// import A from "./components/A";
// import Bai10 from "./components/b10/Bai10";
// import Bai11 from "./components/b11/Bai11";

// export default function App() {
//   const [active, setActive] = useState<boolean>(true);
//   const removeComponent = () => {
//     console.log("Đã gọi vào hàm remove!!");
//     setActive(!active);
//   };
//   const [value, setValue] = useState<string>('Open the form');
//   const updateContent = () => {
//     setValue('Close the open');
//   }
//   const [action, setAction] = useState<string>('Interface rendering');
//   const updateValue = () => {
//     setAction('Render dữ liệu');
//   }
//   return (
//     <div>
//       App
//       <ClassComponent></ClassComponent>
//       <Bai1></Bai1>
//       <Bai2></Bai2>
//       <Bai3></Bai3>
//       <Bai4></Bai4>
//       <div>
//         <Bai5 content={value}/>
//         <button onClick={updateContent}>Change props</button>
//       </div>
//       <div>
//         <Bai6 content={action}/>
//         <br />
//         <button onClick={updateValue}>Change props</button>
//       </div>
//       <Bai7></Bai7>
//       <Bai8></Bai8>
//       <Bai9></Bai9>
//       <Bai10></Bai10>
//       <Bai11></Bai11>
//       {/* <A></A> */}
//       {/*
//         lifecycle - vòng đời của classcomponent
//         functional component không có vòng đời
//         Vd: 1 con người sẽ có vòng đời
//         Sinh ra ==> lớn lên ==> trưởng thành ==> lập sự nghiệp ==> lập gia đình ==> die
//         class component nó cũng có vòng đời riêng của nó
//         4 giai đoạn
//           giai đoạn 1 : khởi tạo (initial)
//             + Đi khởi tạo props và state
//             ==> thực thi 1 lần
//           giai đoạn 2 : mounting (gắn vào UI)
//             + Chạy các phương thức sau
//               1. componentWillMount()
//               2. render()
//                 ko nên setState ở trong phương thức này
//               3. componentDidmount()
//               ==> thực thi 1 lần
//           giai đoạn 3 : updating (cập nhật)
//             ==> có thể thực hiện nhiều lần
//             - Khi nào sảy ra update
//             ==> Khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì giai đoạn updating sảy ra
//             ==> Cung cấp các phương thức sau
//             1. shouldComponentUpdate()
//             2. componentWillUpdate()
//             3. render()
//             4. componentDidUpdate()
//           giai đoạn 4 : unmounting (gỡ bỏ khỏi UI)
//             ==> thực hiện 1 lần
//             cung cấp phương thức
//             componentWillUnMount: thường dùng để xử lí các vấn đề như clearTimeout để tránh bị rò rỉ bộ nhớ
//         )
//        */}
//        {active ? <A></A>:""}
//       <button onClick={removeComponent}>Tháo gỡ component A</button>
//     </div>
//   );
// }

import React, { Component } from 'react';
import Bai11 from './components/b11/Bai11';
import Bai10 from './components/b10/Bai10';
import Class from './components/setTimout/Class';

type Props = {};

type State = {
  show: boolean;
  inputValue: string;
  jobs: Job[];
  deleteJobId: any;
  editJobId: any;
};
type Job = {
  id: number;
  name: string;
  status: boolean;
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: false,
      inputValue: "",
      jobs: [],
      deleteJobId: null,
      editJobId: null,
    };
  }
  componentDidMount(): void {
      const jobLocal = localStorage.getItem("jobs");
      this.setState({
        jobs: jobLocal ? JSON.parse(jobLocal) : [],
      })
      
  }
  // hàm mở modal
  handleClick = (deleteJobId: number) => {
    this.setState({ show: true, deleteJobId});
  };
  // hàm đóng modal
  handleCloseModal = () => {
    this.setState({
      show: false,
      deleteJobId: null
    });
  };
  // Hàm xóa công việc
  handleDeleteJob = () => {
    const { deleteJobId, jobs } = this.state;
    const updatedJobs = jobs.filter(job => job.id !== deleteJobId);
    this.setState({ jobs: updatedJobs, show: false, deleteJobId: null });
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
  // Hàm thêm công việc
  handleCreateJob = () => {
    const { inputValue, jobs } = this.state;
    if (!inputValue.trim()) {
      alert("Vui lòng nhập tên công việc");
      return;
    }
    if (jobs.some(job => job.name.toLowerCase() === inputValue.toLowerCase())) {
      alert("Tên công việc đã tồn tại");
      this.setState({ inputValue: "" });
      return;
    }
    const job: Job = {
      id: Math.ceil(Math.random() * 10000),
      name: inputValue.trim(),
      status: false,
    };
    const updatedJobs = [...jobs, job];
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    this.setState({
      jobs: updatedJobs,
      inputValue: "",
    });
  };
  
  // Cập nhật trạng thái công việc
  handleToggleJobStatus = (jobId: number) => {
    const { jobs } = this.state;
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        return {
          ...job,
          status: !job.status
        };
      }
      return job;
    });
    this.setState({ jobs: updatedJobs });
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
// Mở modal chỉnh sửa công việc
handleEditJob = (editJobId: number) => {
  const job = this.state.jobs.find((job) => job.id === editJobId);
  if (job) {
    const jobName = prompt('Tên công việc :', job.name);
    if (jobName) {
      // Validate dữ liệu đầu vào
      if (jobName.length < 3) {
        alert('Tên công việc phải có ít nhất 3 ký tự.');
        return;
      }
      const updatedJobs = this.state.jobs.map((job) => {
        if (job.id === editJobId) {
          return {
            ...job,
            name: jobName,
            status: true 
          };
        }
        return job;
      });

      // Cập nhật dữ liệu và đóng modal
      this.setState({ jobs: updatedJobs });
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    }
  }
};

  render() {
    const {jobs} = this.state;
    const completedJobs = jobs.filter(job => job.status).length;
    const allCompleted = completedJobs === jobs.length && jobs.length > 0;
    return (
      <>
      <h1>Bài 11 + 12</h1>
        {this.state.show === true ? (
          <Bai11
            deleteJob={this.handleDeleteJob}
            close={this.handleCloseModal}
            title="Cảnh báo"
            content="Bạn có chắc chắn muốn xóa công việc này ??"
          />
        ) : (
          <div className='importan'>
            <h2 className='title'>Danh sách công việc</h2>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nhập tên công việc" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleCreateJob}>Thêm</button>
              </div>
              <div className="list-group" id="add">
                {jobs.map((job) => (
                  <label className="list-group-item" key={job.id}>
                    <div className='lable-content'>
                      <input className="form-check-input me-1" type="checkbox" value="" checked={job.status} onChange={() => this.handleToggleJobStatus(job.id)}/>
                      <span style={{textDecoration: job.status ? "line-through" : "none"}}>{job.name}</span>
                    </div>
                      <div className="icons" style={{cursor:'pointer'}}>
                        <i className="fa-solid fa-pen" onClick={() => this.handleEditJob(job.id)} ></i>
                        <i className="fa-solid fa-trash" onClick={() => this.handleClick(job.id)} ></i>
                    </div>
                  </label>
                ))}
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">Công việc đã hoàn thành :
              <span>{completedJobs}</span> /
              <span>{jobs.length}</span>
              </span>
            </div>
            {allCompleted && (
              <div className='alert alert-success complete-message' role='alert'>Hoàn thành công việc</div>
            )}
          </div>
        )}
        <Bai10></Bai10>
        <Class></Class>
      </>
    );
  }
}

// import React from 'react'
// import Bai12 from './components/b12/Bai12'
// import "./App.css"
// export default function App() {
//   return (
//     <div>
//       <Bai12></Bai12>
//     </div>
//   )
// }
