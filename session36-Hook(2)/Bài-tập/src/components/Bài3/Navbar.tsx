import React, { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveButton(id);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: activeButton === 1 ? "gray" : "white" }}
        onClick={() => handleClick(1)}
      >
        Trang chủ
      </button>
      <button
        style={{ backgroundColor: activeButton === 2 ? "gray" : "white" }}
        onClick={() => handleClick(2)}
      >
        Sản phẩm
      </button>
      <button
        style={{ backgroundColor: activeButton === 3 ? "gray" : "white" }}
        onClick={() => handleClick(3)}
      >
        Giới thiệu
      </button>
      <button
        style={{ backgroundColor: activeButton === 4 ? "gray" : "white" }}
        onClick={() => handleClick(4)}
      >
        Liên hệ
      </button>
    </div>
  );
}
