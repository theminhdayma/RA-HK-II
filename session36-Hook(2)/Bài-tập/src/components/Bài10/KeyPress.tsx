import React, { useState, useEffect } from 'react';

export default function KeyPress() {
  const [keyCode, setKeyCode] = useState("")
  const [keyName, setKeyName] = useState("")

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      setKeyName(event.key);
      setKeyCode(event.keyCode);
    };

    window.addEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <div>
      <h3>Thông tin về phím được nhấn:</h3>
      <p>Tên phím: {keyName}</p>
      <p>Mã phím: {keyCode}</p>
    </div>
  );
}
