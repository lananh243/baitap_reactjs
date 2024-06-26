import { createSlice } from "@reduxjs/toolkit";

const initialState : {lightOrDark : boolean} = {
    lightOrDark : false
}
const regimeReducer = createSlice({
    name : "regime",
    initialState,
    reducers: {
        changeRegime : (state:any) => {
            state.lightOrDark = !state.lightOrDark;
        }
    }
})
export const {changeRegime} = regimeReducer.actions;
export default regimeReducer.reducer;