import React, { useEffect, useState } from "react";
import ListProduct from "./pages/ListProduct";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import PrivetedRouter from "./pages/PrivetedRouter";
import ManagerProduct from "./pages/ManagerProduct";
import ManagerEployee from "./pages/ManagerEployee";
import Login from "./pages/Login";
import DasBorad from "./pages/DasBorad";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const location = useLocation();
  useEffect(()=>{
    window.location
  })
  return (
    <div>
      <nav
        style={{ display: "flex", gap: "10px", position: "sticky", top: "0" }}
      >
        <Link to="/admin">Home</Link>
        <Link to="/admin/manager-product">Product</Link>
        <Link to="/admin/manager-employee">Employee</Link>
      </nav>
      <Routes>
        <Route
          path="/product-detail/:id/:name/:price"
          element={<ProductDetail />}
        ></Route>
        <Route path="/list-product/" element={<ListProduct />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<PrivetedRouter />}>
          <Route index element={<DasBorad />}></Route>
          <Route path="manager-product" element={<ManagerProduct />}></Route>
          <Route path="manager-employee" element={<ManagerEployee />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
