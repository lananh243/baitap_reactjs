import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice ({
    name: "todoListReducer",
    initialState: {
        jobs:[
            {
                id:1,
                name:"Học lập trình",
            },
            {
                id:2,
                name:"redux-toolkit",
            },
            {
                id:3,
                name:"Cầu lông",
            }
        ]
    },
    reducers : {
        addTodo : (state:any,action:any) => {
            state.jobs.push(action.payload);
        },
        deleteJob : (state,action) => {
            // console.log(8888888888);
            state.jobs = state.jobs.filter((item:any) => {
                return item.id !== action.payload
            })
        },
        updateJob : (state, action) => {
            let index = state.jobs.findIndex((item:any) => item.id === action.payload.id);
            state.jobs.splice(index,1,action.payload)
        },

    }
})

// xuất ra các action
// dùng destructoring

export const {addTodo, deleteJob, updateJob} = todoListReducer.actions

// xuất ra hàm reducer
export default todoListReducer.reducer;