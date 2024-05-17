import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  const handleClick = () => {
    setCount(count+1)
  }

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h3>giá trị hiện tại: {count}</h3>
      <h3>giá trị trước: {prevCountRef.current}</h3>
      <button onClick={handleClick}>Tăng</button>
    </div>
  );
}
