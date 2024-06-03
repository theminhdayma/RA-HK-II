import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminIndex8 from "./AdminIndex8";
import Account from "./Account";
import Product8 from "./Product8";
import Order8 from "./Order8";

export default function PrivateRouter8() {
  return (
    <div>
      <h1>Admin</h1>
      <Routes>
        <Route index element={<AdminIndex8 />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/product" element={<Product8 />}></Route>
        <Route path="/order" element={<Order8 />}></Route>
      </Routes>
    </div>
  );
}
