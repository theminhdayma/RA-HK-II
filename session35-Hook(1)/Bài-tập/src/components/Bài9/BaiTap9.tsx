import React, { useState } from "react";

export default function BaiTap9() {
  const [value, setValue] = useState<string>("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>Giới tính: {value}</p>
      <input
        value="nam"
        type="radio"
        checked={value === "nam"}
        onChange={handleRadioChange}
      />
      <label htmlFor="nam">Nam</label>
      <br />
      <input
        value="nữ"
        type="radio"
        checked={value === "nữ"}
        onChange={handleRadioChange}
      />
      <label htmlFor="nữ">Nữ</label>
      <br />
      <input
        value="khác"
        type="radio"
        checked={value == "khác"}
        onChange={handleRadioChange}
      />
      <label htmlFor="khác">Khác</label>
    </div>
  );
}
