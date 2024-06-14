import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";

export default function App() {
  /*
        Tạo form cho người dùng nhập
        Lấy thông tin người dùng nhập
        Khi gửi thông tin lên  db.json
        phải kiểm tra xem email có tôn tại hay kh ?
          => Error: Email đã được đăng ký
        Dùng truy vấn
        axios.get(`http://localhost:8080/users?email_like=${email}`)
          => Có 2 kết quả trả về
            1. Mảng rỗng ([]): email chưa tồn tại trong mảng users
               + Mã hóa mật khẩu rồi mới lưu (dùng thư viện 
               bcrypt để mã hóa)
               + Lưu lên db.json 
            2. Có phần tử: email đã tồn tại
    */
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}
