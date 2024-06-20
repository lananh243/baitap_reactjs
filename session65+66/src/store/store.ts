import {combineReducers, createStore} from "redux";
import countReducer from "./reducers/countReducer";
import jobReducer from "./reducers/todolistReducer";
import userReducer from "./reducers/userReducer";
import personReducer from "./reducers/personReducer";
import productReducer from "./reducers/productReducer";
import randomNumberReducer from "./reducers/randomReducer";
import changeStateReducer from "./reducers/changeStateReducer";
import changeRegimeReducer from "./reducers/regimeReducer";

const rootReducer = combineReducers({
    countReducer,
    jobReducer,
    userReducer,
    personReducer,
    productReducer,
    randomNumberReducer,
    changeStateReducer,
    changeRegimeReducer
})
const store = createStore(rootReducer);

export default store;