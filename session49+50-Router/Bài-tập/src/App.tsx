import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Bài1/Home";
import Contact from "./components/Bài2/Contact";
import Login from "./components/Bài3/Login";
import Register from "./components/Bài4/Register";
import NotFound from "./components/Bài5/NotFound";
import Baitap6 from "./components/Bài6/Baitap6";
import Header from "./components/Bài7/Header";
import Baitap8 from "./components/Bài8/Baitap8";
import CustomLink from "./components/Bài9/CustomLink";
import ListUser from "./components/Bài10/ListUser";
import UserDetail from "./components/Bài10/UserDetail";
import Baitap11 from "./components/Bài11/Baitap11";

export default function App() {
  return (
    <div style={{ marginLeft: "250px" }}>
      <h1>Bài 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11</h1>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/baitap6/*" element={<Baitap6 />} />
        <Route path="/header/*" element={<Header />} />
        <Route path="/baitap8/*" element={<Baitap8 />} />
        <Route path="/customLink/*" element={<CustomLink />} />
        <Route path="/listUser/*" element={<ListUser />} />
        <Route path="/UserDetail" element={<UserDetail />} />
        <Route path="/baitap11/*" element={<Baitap11 />}></Route>
      </Routes>
    </div>
  );
}
