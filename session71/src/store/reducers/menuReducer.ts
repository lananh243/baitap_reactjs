import { createSlice } from "@reduxjs/toolkit"

const initialState : {menuOrIcon : boolean} = {
    menuOrIcon : false
}

const menuReducer = createSlice ({
    name:"menu",
    initialState,
    reducers : {
        changeMenu : (state:any) => {
            state.menuOrIcon = !state.menuOrIcon;
        }
    }
})

export const {changeMenu} = menuReducer.actions;
export default menuReducer.reducer;