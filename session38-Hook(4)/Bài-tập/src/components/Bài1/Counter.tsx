import React, { useCallback, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    const handleClick = () => {
      setCount(count + 1);
    };
    return handleClick;
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment()}>Increase</button>
    </div>
  );
}
