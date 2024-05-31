import React from "react";
import { Route, Routes } from "react-router-dom";
import Register11 from "./Register11";
import LogIn11 from "./LogIn11";

export default function Baitap11() {
  return (
    <div>
      <Routes>
        <Route index element={<Register11 />}></Route>
        <Route path="/login" element={<LogIn11 />}></Route>
      </Routes>
    </div>
  );
}
