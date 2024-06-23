import { createStore , combineReducers} from "redux";
import jobReducer from "./reducers/jobReducer";
import bookReducer from "./reducers/bookReducer";

const rootReducer = combineReducers ({
    jobReducer,
    bookReducer
})
export const store = createStore(rootReducer);
