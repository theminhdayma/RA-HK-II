import React, { useState } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";

export default function Login() {
  /**
       Nhập email và pasword
       Vào db.json có rmail người dùng nhập hay không?
       Nếu có thì lấy thông tin của user
       {
        id: 
        userName: 
        email: 
        password: "fgqkuewhskfajdljbweukrfhsjdn"
       }
       bctypt.compare()
     */
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Gọi API để lấy thông tin user từ email
      const response = await axios.get(
        `http://localhost:8080/users?email=${email}`
      );
      const user = response.data[0];

      if (!user) {
        alert("Không tìm thấy tài khoản.");
        return;
      }

      // So sánh mật khẩu
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        alert("Mật khẩu không hợp lệ.");
        return;
      }

      alert("Đăng nhập thành công !");
      reset()
      //navigate("/home")
    } catch (error) {
      console.error(error);
      alert("Đăng nhập thất bại.");
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
