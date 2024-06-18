import { createStore, combineReducers } from "redux";
import reducerProfile from "./reducers/Bai1/Profile";
import reducerListUser from "./reducers/Bai2/ListUser";
import reducerListProduct from "./reducers/Bai3/ListProduct";
import reducerCount from "./reducers/Bai4/Counter";
import reducerRandomNumber from "./reducers/Bai5/RandomNumber";
import reducerChange from "./reducers/Bai6/ChangeState";
import reducerCheck from "./reducers/Bai7+8/Checkbox";
import reducerRegister from "./reducers/Bai9+10/Register";

const rootReducer = combineReducers({
    reducerProfile,
    reducerListUser,
    reducerListProduct,
    reducerCount,
    reducerRandomNumber,
    reducerChange,
    reducerCheck,
    reducerRegister,
})

const store = createStore(rootReducer);
export default store