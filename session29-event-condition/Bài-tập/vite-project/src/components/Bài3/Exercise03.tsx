import React, { useState } from 'react'

export default function Exercise03() {
    const [time, setTime] = useState<string>("")
    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value)
    }
  return (
    <div>
        <h2>Thời gian: {time}</h2>
        <input onChange={click} type="date" />
    </div>
  )
}
