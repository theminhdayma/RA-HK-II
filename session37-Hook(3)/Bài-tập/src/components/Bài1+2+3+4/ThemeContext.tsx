import React, { createContext, useContext, useState } from "react";

import { SetUseContext } from "../../App";

// export const SetUseContext = createContext(null);

export default function ThemeContext() {
  const [isCheck, setIsCheck] = useState<boolean>(false)
  const getData = useContext(SetUseContext);

  const handleClick = () => {
    setIsCheck(!isCheck)
  }
  return (
    <div>
      <p style={{color: isCheck ? getData : "red"}}>Nền {isCheck ? "Xanh" : "Đỏ"}</p>
      <button onClick={handleClick} style={{backgroundColor: isCheck ? getData : "red"}}>Click me !!! </button>
    </div>
  );
}
