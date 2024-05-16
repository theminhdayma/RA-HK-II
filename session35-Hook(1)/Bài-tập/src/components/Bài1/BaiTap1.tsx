import React, { useState } from "react";

export default function BaiTap1() {
  const [name, setName] = useState<string>("Nguyễn Thế Minh");
  return (
    <div>
      <p>Họ và tên: {name}</p>
    </div>
  );
}
