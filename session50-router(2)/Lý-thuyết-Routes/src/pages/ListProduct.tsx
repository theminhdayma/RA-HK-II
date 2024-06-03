import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function ListProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const paramValue = searchParams.get("key"); // Lấy dữ liệu trên params
  console.log(paramValue);

  const handleSearch = () => {
    setSearchParams({ key: inputValue }); // Truyền dữ liệu trên params
  };
  return (
    <div>
      <Link to={"product-detail"}>Xem chi tiết</Link>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
