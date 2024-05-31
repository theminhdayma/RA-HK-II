import React from "react";
import "./home.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        {/* <Link to="/about">about</Link>
        <Link to="/news">news</Link>
        <Link to="/contact">contact</Link> */}
        {/*
            Sinh ra thêm navLink
        */}
        <a href="/Minh">Minh</a>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/news">news</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
