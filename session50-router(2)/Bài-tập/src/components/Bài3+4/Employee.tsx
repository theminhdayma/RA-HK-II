import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Employee() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get("studentName");

  const handleSearch = () => {
    setSearchParams({ studentName: inputValue });
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button style={{ backgroundColor: "Aqua" }} onClick={handleSearch}>
        Tìm kiếm
      </button>
      <h2>StudentName: {paramValue}</h2>
    </div>
  );
}
