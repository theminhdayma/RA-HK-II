import React from "react";
import Button from "react-bootstrap/Button";

export default function Baitap1() {
  return (
    <div>
      <Button variant="primary">Lưu</Button>{" "}
      <Button variant="secondary">Hủy</Button>{" "}
      <Button variant="success">Thành Công</Button>{" "}
      <Button variant="warning">Cảnh Báo</Button>{" "}
      <Button variant="danger">Báo Lỗi</Button>{" "}
      <Button variant="info">Thông Tin</Button>{" "}
      <Button variant="link">Đường Dẫn</Button>
    </div>
  );
}
