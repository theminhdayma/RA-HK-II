import Products from "./components/Products";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

export default function App() {
  const navigate = useNavigate();
  const handleClickCart = () => {
    navigate("/cart")
  }
  return (
    <div>App
      <br />
      <button onClick={handleClickCart}>giỏ hàng</button>
      {/*
        Tạo danh sách sản phẩm ở trong components Products
        Tạo component Product từng sản phẩm
          + Tạo nút bấm để xem chi tiết sản phẩm
      */}
      <Routes>
        <Route path="/" element={<Products />}>
          <Route
            path="product-detail/:productId"
            element={<ProductDetail />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
