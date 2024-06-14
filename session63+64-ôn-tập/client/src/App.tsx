import React from "react";
import "./App.css";
import "./index.css";
import Index from "./components/Index";
import { Route, Router, Routes } from "react-router";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/list-post" element={<Index />}></Route>
      </Routes>
    </div>
  );
}
