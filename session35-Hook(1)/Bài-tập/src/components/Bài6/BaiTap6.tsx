import React, { useState } from 'react'

export default function BaiTap6() {
    const [count, setCount] = useState<number>(0)
    const handleClick = () => {
        setCount(count + 1)
    }
  return (
      <div>
        Bt6:
          <br />
          <p>bạn đã click { count} lần</p>
          <button onClick={handleClick}>click me !!!</button>
      </div>
  )
}
