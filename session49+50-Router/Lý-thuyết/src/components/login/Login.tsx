import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const [data, setData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (location.state) {
      setData({
        email: location.state.email,
        password: location.state.password,
      });
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      Login <br />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <button>LogIn</button>
    </div>
  );
}
