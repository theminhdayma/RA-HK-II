import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Baitap5() {
  return (
    <div>
      {[
        "success",
        "danger",
        "warning",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Thêm tài khoản mới thành công !!!
        </Alert>
      ))}
    </div>
  );
}
