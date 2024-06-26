import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteJob, updateJob } from "../store/reducers/todoListReducer";

export default function TodoList() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const addTodoList = () => {
    let newJob: any = {
      id: Math.floor(Math.random() * 10000000),
      name: "code redux-toolkit",
    };
    dispatch(addTodo(newJob));
  };
  const deleteTodoJob = (id: number) => {
    dispatch(deleteJob(id));
  };
  const handleUpdate = (job:any) =>{
    let newJob = {...job,name :"Học lập trình với redux-toolkit"}
    dispatch(updateJob(newJob))
  }
  return (
    <div>
      TodoList
      <button onClick={addTodoList}>Add</button>
      <ul>
        {data.todoListReducer.jobs.map((job: any) => {
          return (
            <>
              <li key={job.id}>{job.name} 
                <button onClick={() => deleteTodoJob(job.id)}>Xóa</button>
                <button onClick={() => handleUpdate(job)}>Update</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
