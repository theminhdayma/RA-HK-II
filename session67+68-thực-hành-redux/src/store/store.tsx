import { combineReducers, createStore } from "redux";
import reducerBook from "./reducers/DataReducer";

const rootReducer = combineReducers({
    reducerBook,
})

const store = createStore(rootReducer);

export default store