import React from "react";
import { Route, Routes } from "react-router-dom";
import Regiter from "./components/regiter/Regiter";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import About from "./components/about/About";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div>
      REACT ROUTER DOM
      {/*
        - Là 1 thư viện
        - Tạo 1 bộ định tuyến cho trang web của mình tức là nó sẽ cho phép
        react element được hiển thị ứng với các đường dẫn URL
        - Cách dùng: 
           + Cài đặt npm i react-router-dom
           + Dùng component browserRouter để cung cấp bộ định tuyến cho 
      */}
      <Routes>
        <Route path="" element={<Home />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regiter" element={<Regiter />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
