import React, { useState } from "react";

export default function BaTap8() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue);

  return (
    <div>
      <p>thành phố: {selectedValue}</p>
      <select onChange={handleSelectChange}>
        <option value="">--Chọn thành phố--</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Nam Định">Nam Định</option>
        <option value="Hà Nội">Hà Nội</option>
      </select>
    </div>
  );
}
