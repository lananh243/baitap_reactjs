import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice ({
    name:"user",
    initialState : {
        users : [
            { id: 1, name: "Nguyễn Văn A" },
            { id: 2, name: "Nguyễn Văn B" },
            { id: 3, name: "Nguyễn Văn C" },
            { id: 4, name: "Nguyễn Văn D" }
        ]
        
    },
    reducers : {
        addUser : (state:any,action:any) => {
            state.users.push(action.payload)
        },
        deleteUser : (state,action) => {
            state.users = state.users.filter((item:any) => {
                return item.id !== action.payload
            })
        }

    }
})
export const {addUser,deleteUser} = userReducer.actions;
export default userReducer.reducer;