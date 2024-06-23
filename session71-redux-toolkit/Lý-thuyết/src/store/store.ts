import { configureStore } from "@reduxjs/toolkit";
import Minh from "./reducers/CountReducer"

export const store = configureStore({
    reducer: {
        count: Minh
    }
})