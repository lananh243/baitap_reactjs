import { createStore , combineReducers} from "redux";
import jobReducer from "./reducers/jobReducer";
import booksReducer from "./reducers/booksReducer";


const rootReducer = combineReducers ({
    jobReducer,
    booksReducer
})
export const store = createStore(rootReducer);
