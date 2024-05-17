import React, { useEffect, useState } from "react";

export default function Season() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [season, setSeason] = useState<string>("");

  useEffect(() => {
    if (month >= 1 && month <= 3) {
      setSeason("Xuân");
    } else if (month >= 4 && month <= 6) {
      setSeason("Hạ");
    } else if (month >= 7 && month <= 9) {
      setSeason("Thu");
    } else {
      setSeason("Đông");
    }
  },[month]);

  return (
    <div>
      <p>Bây giờ là tháng {month}</p>
      <p>Mùa hiện tại: {season}</p>
    </div>
  );
}
