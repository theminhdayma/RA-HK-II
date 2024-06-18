import { combineReducers, createStore } from "redux";
import reducerCount from "./reducers/countReducer";
import reducerJob from "./reducers/jobReducer";


const rootReducer = combineReducers({
    reducerCount,
    reducerJob
})

const store = createStore(rootReducer);
export default store;




