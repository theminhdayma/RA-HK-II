import { NavLink, Route, Routes } from "react-router-dom";
import "./Baitap8.css";
import Admin from "./Admin";
import Account from "./Account";
import Product8 from "./Product8";

export default function Baitap8() {
  return (
    <nav>
      <h2>Bài 8</h2>
      <div>
        <NavLink to="/baitap8/admin" className="m-4">
          Admin
        </NavLink>
        <NavLink to="/baitap8/account" className="m-4">
          Account
        </NavLink>
        <NavLink to="/baitap8/product" className="m-4">
          Product
        </NavLink>
      </div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product8 />} />
      </Routes>
    </nav>
  );
}
