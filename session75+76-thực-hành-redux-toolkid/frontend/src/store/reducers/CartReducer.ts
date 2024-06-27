import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interface";
import { getAllCart, addProduct } from "../../service/cart.service";

const listCart: Product[] = [];

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: listCart,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        const existingProduct = state.cart.find(
          (product) => product.id === action.payload.id
        );
        if (existingProduct) {
          existingProduct.quantity += action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }
      });
  },
});

export default cartReducer.reducer;
