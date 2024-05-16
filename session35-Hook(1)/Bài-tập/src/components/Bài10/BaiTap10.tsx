import React, { useState } from "react";

export default function BaiTap10() {
  // Khai báo state lưu trữ các giá trị được chọn trong các checkbox
  const [checkBox, setCheckBox] = useState<string[]>([]);

  // Hàm xử lý sự kiện khi thay đổi trạng thái của checkbox
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Lấy value của checkbox
    const checked = e.target.checked; // Kiểm tra xem checkbox có được chọn hay không

    if (checked) {
      // Nếu checkbox được chọn thì thêm vào mảng checkBox
      setCheckBox([...checkBox, value]);
    } else {
      // Nếu checkbox bị bỏ chọn, loại bỏ giá trị khỏi mảng `checkBox`
      setCheckBox(checkBox.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <p>Sở thích: [{checkBox.join(",")}]</p>
      
      <label>
        <input
          onChange={handleCheckBoxChange}
          value="Đi chơi"
          type="checkbox"
          // Kiểm tra xem giá trị có trong mảng `checkBox` hay không
          checked={checkBox.includes("Đi chơi")}
        />
        Đi chơi
      </label>
      <br />
      
      <label>
        <input
          onChange={handleCheckBoxChange}
          value="Code"
          type="checkbox"
          checked={checkBox.includes("Code")}
        />
        Code
      </label>
      <br />
      
      <label>
        <input
          onChange={handleCheckBoxChange}
          value="Đi bơi"
          type="checkbox"
          checked={checkBox.includes("Đi bơi")}
        />
        Đi bơi
      </label>
      <br />
      
      <label>
        <input
          onChange={handleCheckBoxChange}
          value="Chơi game"
          type="checkbox"
          checked={checkBox.includes("Chơi game")}
        />
        Chơi game
      </label>
    </div>
  );
}
