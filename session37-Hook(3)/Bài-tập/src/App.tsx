import React, { createContext, useState } from "react";
import ThemeContext from "./components/Bài1+2+3+4/ThemeContext";

export const SetUseContext = createContext("");

export default function App() {
  const [name, setName] = useState<string>("blue");
  return (
    <div className="content">
      <h1>Bài 1 + 2 + 3 + 4</h1>
      <SetUseContext.Provider value={name}>
        <ThemeContext />
      </SetUseContext.Provider>
      <h1>Bài 5</h1>
      
      <h1>Bài 6</h1>

      <h1>Bài 7</h1>

      <h1>Bài 8</h1>

      <h1>Bài 9</h1>

      <h1>Bài 10</h1>
    </div>
  );
}
