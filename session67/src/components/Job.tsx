import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JobTodo } from '../interface';

export default function Job() {
    // Lấy dữ liệu ở trong đi render
    // dùng useSelector để lấy dự liệu trong kho 
    const [name, setName] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [editJobId, setEditJobId] = useState<number | null>(null);
    const jobs:any = useSelector(state => {
        return state;
    })
    const dispatch = useDispatch();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setName(value);
    }
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let valueSelect = e.target.value;
        setLevel(valueSelect);
    }
    const addTodo = () => {
        let newJob = {
          id: Math.floor(Math.random() * 100000000),
          name: name,
          status: false,
          level: level,
        };
        dispatch({
          type: "ADD_TODO",
          payload: newJob,
        });
        setName("");
        setLevel("")
      };
    const editJob = (id:number) => {
        setEditJobId(id);
        const jobToEdit = jobs.jobReducer.find((job: JobTodo) => job.id === id);
        if (jobToEdit) {
            setName(jobToEdit.name);
            setLevel(jobToEdit.level);
        }
    };
    const updateJob = () => {
        if (editJobId !== null) {
            const updatedJob = {
                id: editJobId,
                name: name,
                status: false,
                level: level,
            };
            dispatch({
                type: "EDIT_TODO",
                payload: updatedJob,
            });
            setName("");
            setLevel("");
            setEditJobId(null);
        }
    };

    const deleteJob = (id:number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa công việc này ?")) {
            dispatch({
                type: "DELETE_TODO",
                payload: id
            })
        }
        
    }
  return (
    <>
        <div style={{display:"flex", gap:"20px"}}>
            <label htmlFor="">Tên công việc</label>
            <input type="text" onChange={handleChange} value={name}/>
            <select name="" id="" onChange={handleSelect} value={level}>
                <option value="">Chọn cấp độ</option>
                <option value="Cực kì quan trọng">Cực kì quan trọng</option>
                <option value="Quan trọng">Quan trọng</option>
                <option value="Bình thường">Bình thường</option>
            </select>
            {editJobId !== null ? (
                <button onClick={updateJob}>Cập nhật công việc</button>
            ) : (
                <button onClick={addTodo}>Thêm công việc</button>
            )}
        </div>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên công việc</th>
                    <th>Trạng thái công việc</th>
                    <th>Mức độ</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {jobs.jobReducer.map((job:JobTodo, index:number)=> {
                    return (
                        <tr key={job.id}>
                            <td>{index + 1}</td>
                            <td>{job.name}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{job.level}</td>
                            <td>
                                <button onClick={()=>deleteJob(job.id)}>xóa</button>
                                <button onClick={()=>editJob(job.id)}>sửa</button>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </>
  )
}
