import { createSlice } from "@reduxjs/toolkit"
const languageReducer = createSlice ({
    name:"language",
    initialState: {
        VNOrE: "Vietnamese"
    },
    reducers : {
        changeVN : (state:any) => {
            state.VNOrE = "VietNamese"
        },
        changeE : (state:any) => {
            state.VNOrE = "English"
        }
    }
})
export const {changeVN,changeE} = languageReducer.actions;
export default languageReducer.reducer;