// store.js hoặc store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import CartReducer from "./reducers/CartReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: CartReducer
  },
});

export default store;
