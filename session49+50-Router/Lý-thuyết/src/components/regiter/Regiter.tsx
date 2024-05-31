import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Regiter() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const regiter = () => {
    // Lấy giá trị người dùng nhập vào
    // Xử lý các tác vụ (validate)
    // Khi đăng ký xong thù chuyển sang trang đăng nhập
    navigate("/login", { state: formData });
  };
  return (
    <div>
      <label htmlFor="">Email</label>
      <input name="email" type="email" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" onChange={handleChange} />
      <button onClick={regiter}>Regiter</button>
    </div>
  );
}
