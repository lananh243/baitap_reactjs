import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers ({
    productReducer,
    cartReducer
})

// tạo kho
export const store = createStore(rootReducer)