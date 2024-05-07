import React, { useState } from 'react'

export default function Exercise07() {
    const [count, setCount] = useState<number>(0)

    const clickCount = () => {
        setCount(count+1)
    }

  return (
    <div>
        <button onClick={clickCount}>Click {count} lần</button>
    </div>
  )
}
