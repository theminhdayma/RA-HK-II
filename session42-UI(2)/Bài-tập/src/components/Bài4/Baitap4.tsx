import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Baitap4() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Nguyễn Thế Minh
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Đổi Mật Khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đăng Xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
