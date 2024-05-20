import React, { useCallback, useState } from "react";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import Memo from "./components/Memo";
import UseCalkback from "./components/UseCalkback";
import UseMemo from "./components/UseMemo";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Minh");

  const increase = useCallback(() => {
    console.log("Số lần useCallBack được gọi !!!");

    const handleIncrease = () => {};
    return handleIncrease;
  }, []);

  /**
    Khi mỗi lần function App re-render thì lại tạo ra 1 biến và gán giá trị
    là 1 cái function là kiểu dữ liệu tham chiếu (reference-type)
    Cứ mỗi lần sẽ tạo biến gán giá trị mới
   */
  return (
    <div>
      {/**
         Trong component App mỗi khi component re-render hoặc render lần đầu
         Thì các component con sẽ render.
       */}
      <p>Gía trị : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click memo !!</button>
      <UseEffect />
      <UseRef />
      <UseContext />
      <Memo name={name} increase={increase} />
      <UseCalkback />
      <UseMemo />
    </div>
  );
}
