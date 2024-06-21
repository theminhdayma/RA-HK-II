import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/bookReducer";
import cartProduct from "./reducers/cartReducer";


const rootReducer = combineReducers({
    productReducer,
    cartProduct

})

const store = createStore(rootReducer)

export default store