import {JobTodo} from "../../interface"
// let stateJob:JobTodo[]=[
//     {
//         id:1,
//         name:"học redex",
//         status:false,
//         level:"quan trọng"
//     },
//     {
//         id:2,
//         name:"cầu lông",
//         status:false,
//         level:"bình thường"
//     }

// ];

let stateJob:JobTodo[] = JSON.parse(localStorage.getItem("jobs") || "[]")

const jobReducer= (state = stateJob, action:any) => {
    switch (action.type) {
        case "ADD_TODO":
            localStorage.setItem("jobs", JSON.stringify([...state,action.payload]))
            return [...state,action.payload];
        case "DELETE_TODO":
            const updatedState = state.filter(job => job.id !== action.payload);
            localStorage.setItem("jobs", JSON.stringify(updatedState));
            return updatedState;
        case "EDIT_TODO":
            const updatedJobs = state.map(job =>
                job.id === action.payload.id ? { ...job, ...action.payload } : job
            );
            localStorage.setItem("jobs", JSON.stringify(updatedJobs));
            return updatedJobs;
        default:
            return state;
    }
}
export default jobReducer;
