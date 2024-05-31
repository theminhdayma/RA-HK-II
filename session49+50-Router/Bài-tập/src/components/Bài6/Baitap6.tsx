import { Link, Route, Routes } from "react-router-dom";
import ContactAdmin from "./ContactAdmin";
import HomePage from "./HomePage";

export default function Baitap6() {
  return (
    <nav>
      <h2>Bài 6</h2>
      <div>
        <Link to="/baitap6/HomePage" className="m-4">
          HomePage
        </Link>
        <Link to="/baitap6/ContactAdmin">ContactAdmin</Link>
      </div>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ContactAdmin" element={<ContactAdmin />} />
      </Routes>
    </nav>
  );
}
