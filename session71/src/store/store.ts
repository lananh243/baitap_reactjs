import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import todoListReducer from "./reducers/todoListReducer";
import listReducer from "./reducers/listReducer";
import regimeReducer from "./reducers/regimeReducer";
import boxReducer from "./reducers/boxReducer";
import menuReducer from "./reducers/menuReducer";
import languageReducer from "./reducers/languageReducer";
import userReducer from "./reducers/userReducer";




const store = configureStore ({
    reducer : {
        countReducer,
        todoListReducer,
        listReducer,
        regimeReducer,
        boxReducer,
        menuReducer,
        languageReducer,
        userReducer
        
        
    }
})
export default store;