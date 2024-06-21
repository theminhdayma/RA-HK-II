// cartReducer.ts

import { ProductType, Action } from "../../interface/interface.ts";
import saveLocal from "../../Data/saveData.ts";

const initialCart: ProductType[] = JSON.parse(localStorage.getItem("listCart") || "[]");

const cartProduct = (state = initialCart, action: Action) => {
  switch (action.type) {
    case "ADDPRODUCT":
      const { id } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
        const updatedProducts = state.map((product) =>
          product.id === id ? { ...product, number: product.number + 1 } : product
        );
        saveLocal("listCart", updatedProducts);
        return updatedProducts;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
        const newProduct = { ...action.payload, number: 1 };
        const updatedCart = [...state, newProduct];
        saveLocal("listCart", updatedCart);
        return updatedCart;
      }

    case "UPDATE":
      // Xử lý action UPDATE nếu cần
      return state;

    default:
      return state;
  }
};

export default cartProduct;
