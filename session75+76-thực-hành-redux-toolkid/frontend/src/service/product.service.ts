import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListProduct: any = createAsyncThunk(
  "product/getListProduct",
  async () => {
    const res = await axios.get("http://localhost:8080/listProduct");
    return res.data;
  }
);
