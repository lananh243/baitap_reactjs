import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

const store = configureStore ({
    reducer : {
        userReducer,
        postReducer
    }
})

export default store;