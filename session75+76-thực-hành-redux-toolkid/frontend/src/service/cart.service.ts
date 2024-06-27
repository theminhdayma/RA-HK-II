import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../interface";

export const getAllCart: any = createAsyncThunk(
  "cart/getAllCart",
  async () => {
    const res = await axios.get("http://localhost:8080/listCart");
    return res.data;
  }
);

export const addProduct: any = createAsyncThunk(
  "cart/addProduct",
  async (product: Product, { rejectWithValue }) => {
    try {
      const productInStock = await axios.get(`http://localhost:8080/listProduct/${product.id}`);
      if (productInStock.data.total >= product.quantity) {
        await axios.patch(`http://localhost:8080/listProduct/${product.id}`, {
          total: productInStock.data.total - product.quantity,
        });
        const res = await axios.post("http://localhost:8080/listCart", product);
        return res.data;
      } else {
        return rejectWithValue('Số lượng sản phẩm không đủ');
      }
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);
