import React, { useCallback, useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("black");
  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );
  return (
    <div>
      <h4>Màu người dùng chọn</h4>
      <input type="color" value={color} onChange={handleChangeColor} />
      <h4>Màu hiển thị</h4>
      <div style={{ width: 200, height: 200, backgroundColor: color }}></div>
    </div>
  );
}
