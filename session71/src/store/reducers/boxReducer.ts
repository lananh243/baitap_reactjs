import { createSlice } from "@reduxjs/toolkit"

const initialState : {longOrShort : boolean} = {
    longOrShort : false
}

const boxReducer = createSlice ({
    name : "box",
    initialState,
    reducers : {
        changeBox : (state:any) => {
            state.longOrShort = !state.longOrShort;
        }
    }
})
export const {changeBox} = boxReducer.actions;
export default boxReducer.reducer;