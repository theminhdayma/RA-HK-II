import React, { useState } from 'react'

export default function RandomGender() {
    var array: string[] = ["Nam", "Nữ", "Khác"];
    const [count, setCount] = useState<number>(0)
    const [gender, setGender] = useState<string>("Nam");

    const handleClick = () => {
        setCount(count+1)
        setGender(array[count])
    }
  return (
    <div>
        <p>Sau khi click lần {count}</p>
        <h3>Gebder: {gender}</h3>
        <button onClick={handleClick}>Random gender</button>
    </div>
  )
}
