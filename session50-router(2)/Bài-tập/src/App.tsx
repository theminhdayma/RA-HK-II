import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Bài1/ProductDetail";
import Student from "./components/Bài2/Student";
import Employee from "./components/Bài3+4/Employee";
import PrivateRouter from "./components/Bài5+6/PrivateRouter";
import Account from "./components/Bài5+6/Account";
import Login from "./components/Bài5+6/Login";
import Teams from "./components/Bài7/Teams";
import PrivateRouter8 from "./components/Bài8/PrivateRouter8";
import Header from "./components/Bài10/Header";

export default function App() {
  const LazyLoadComp = React.lazy(
    () => import("./components/Bài9/LazyLoadComp")
  );

  return (
    <div style={{ marginLeft: "250px" }}>
      <h1>Bài 1</h1>
      <Routes>
        <Route path="product-detail/:id" element={<ProductDetail />}></Route>
      </Routes>
      <h1>Bài 2</h1>
      <Routes>
        <Route path="student/:name" element={<Student />}></Route>
      </Routes>
      <h1>Bài 3 + 4</h1>
      <Routes>
        <Route path="/employee" element={<Employee />}></Route>
      </Routes>
      <h1>Bài 5 + 6</h1>
      <Routes>
        <Route path="/" element={<PrivateRouter />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <h1>Bài 7</h1>
      <Routes>
        <Route path="/teams/*" element={<Teams />} />
      </Routes>
      <h1>Bài 8</h1>
      <Routes>
        <Route path="/admin/*" element={<PrivateRouter8 />}></Route>
      </Routes>
      <h1>Bài 9</h1>
      <Routes>
        <Route
          path="lazy-load"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadComp />
            </Suspense>
          }
        ></Route>
      </Routes>
      <h1>Bài 10</h1>
      <Routes>
        <Route path="/header" element={<Header />}></Route>
      </Routes>
    </div>
  );
}
