import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Account from "./Account";
import PrivateRouter from "./PrivateRouter";

export default function Baitap5() {
  return (
    <div>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRouter />} />
      </Routes>
    </div>
  );
}
