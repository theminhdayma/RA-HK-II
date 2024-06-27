import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interface";
import { getListProduct } from "../../service/product.service";


const listProduct: Product[] = []

const productReducer = createSlice({
    name: "productReducer",
    initialState: {
        product: listProduct
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getListProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})

export default productReducer.reducer