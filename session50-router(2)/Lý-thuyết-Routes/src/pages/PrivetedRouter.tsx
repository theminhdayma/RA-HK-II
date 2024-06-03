import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivetedRouter() {
  const isLogin = true;
  return (
    <div>{isLogin ? <Outlet /> : <Navigate to={"/login"}></Navigate>}</div>
  );
}
