import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice ({
    name:"counter",
    initialState : {
        count : 0
    },
    reducers : {
        // trong reducers sẽ chứa các action
        increase : (state:any) => {
            // state.count = state.count + 1;
            state.count += 1;
            
        },
        decrease : (state:any) => {
            state.count -= 1;
        },
        reset : (state:any) => {
            state.count = 0;
        }
    }
})
// Đi xuất ra các action bằng cách dùng destructoring

export const {increase,decrease,reset} = countReducer.actions;
// Xuất ra hàm reducer

export default countReducer.reducer;