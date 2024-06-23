import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/reducers/Bai8/Login";
import { useNavigate } from "react-router-dom";

export default function Logined() {
  const { user, isAuthenticated } = useSelector(
    (state: any) => state.loginReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!isAuthenticated) {
    return <div>Bạn chưa đăng nhập!</div>;
  }

  return (
    <div>
      <div>User Name: {user.userName}</div>
      <div>Email: {user.email}</div>
      <button
        className="border border-gray-500"
        onClick={handleLogout}
      >
        Đăng Xuất
      </button>
    </div>
  );
}
