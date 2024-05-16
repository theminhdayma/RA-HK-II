import React, { useState } from "react";

export default function BaiTap4() {
  const [title, setTitle] = useState<boolean>(false);
  const handleClick = () => {
    setTitle(!title);
  };
  return (
    <div>
      <button onClick={handleClick}>{title ? "ẩn" : "hiện"}</button>
      <p>{title ? "Minh deptrai" : ""}</p>
    </div>
  );
}
