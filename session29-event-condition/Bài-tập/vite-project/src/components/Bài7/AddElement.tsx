import React, { useState } from 'react'

export default function AddElement() {
    const [array, setArray] = useState<number[]>([])

    const addElement = () => {
        const newArray = [...array, Math.floor(Math.random() * 10) + 1];
        setArray(newArray);
    };

  return (
    <div>
        <p>Mảng số: [{array.join(",")}]</p>
        <button onClick={addElement}>Add element</button>
    </div>
  )
}
