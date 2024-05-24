import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/LogIn/LogIn";
import Admin from "./components/Admin/Admin";

export default function App() {
  return (
    <div>
      <h1>LogIn</h1>
      <LogIn />
      <h1>Admin</h1>
      <Admin />
    </div>
  );
}
