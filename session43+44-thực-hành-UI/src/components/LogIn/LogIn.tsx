import React from "react";
import "./logIn.scss";

export default function LogIn() {
  return (
    <div className="backgound-full">
      <img
        className="img-left"
        src="https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-doremon-hai-hay-nhat_054125921.jpg"
        alt=""
      />
      <div className="page-log-in">
        <h2>Login</h2>
        <div className="input-all">
          <div className="input">
            <label htmlFor="">E-Mail</label>
            <input placeholder="Placeholder content" type="text" />
          </div>
          <div className="input">
            <label htmlFor="">PassWord</label>
            <input placeholder="Placeholder content" type="text" />
            <strong className="fogot">Fogot password?</strong>
          </div>
        </div>
        <button className="btn-logIn">Login</button>
        <div className="or">
          <div className="crossbar"></div>
          <span>or</span>
          <div className="crossbar"></div>
        </div>
        <button className="register">Register now</button>
      </div>
    </div>
  );
}
