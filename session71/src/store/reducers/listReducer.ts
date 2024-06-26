import { createSlice } from "@reduxjs/toolkit";

const listReducer = createSlice({
  name: "listNumber",
  initialState: {
    listNumber: []
  },
  reducers: {
    addRandomNumber: (state:any) => {
      const newNumber = Math.floor(Math.random() * 100);
      state.listNumber.push(newNumber);
    }
  }
});

export const { addRandomNumber } = listReducer.actions;
export default listReducer.reducer;