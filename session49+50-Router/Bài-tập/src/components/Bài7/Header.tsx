import { NavLink, Route, Routes } from "react-router-dom";
import HomeBai7 from "./HomeBai7";
import Product from "./Product";
import Detail from "./Detail";
import "./header.css";

export default function Header() {
  return (
    <nav>
      <h2>Bài 7</h2>
      <div>
        <NavLink to="/header/Home" className="m-4">
          Home
        </NavLink>
        <NavLink to="/header/Product" className="m-4">
          Product
        </NavLink>
        <NavLink to="/header/Detail" className="m-4">
          Detail
        </NavLink>
      </div>
      <Routes>
        <Route path="/Home" element={<HomeBai7 />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </nav>
  );
}
