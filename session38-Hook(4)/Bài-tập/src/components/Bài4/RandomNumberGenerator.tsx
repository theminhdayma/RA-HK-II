import React, { useCallback, useState } from "react";

export default function RandomNumberGenerator() {
  const [number, setNumber] = useState<number>(0);
  const randomNumber = useCallback(() => {
    const handleRandomNumber = () => {
      setNumber(Math.floor(Math.random() * 99999999));
    };
    return handleRandomNumber;
  }, []);
  return (
    <div>
      <h3>Number Random: {number}</h3>
      <button onClick={randomNumber()}>Generate</button>
    </div>
  );
}
