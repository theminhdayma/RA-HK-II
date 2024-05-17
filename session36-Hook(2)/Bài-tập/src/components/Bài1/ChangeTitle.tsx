import React from "react";

export default function ChangeTitle() {
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.title = e.target.value
  };
  document.title
  return (
    <div>
      <input placeholder="Nhập tiêu đề..." onChange={handleChangeTitle} type="text" />
    </div>
  );
}
