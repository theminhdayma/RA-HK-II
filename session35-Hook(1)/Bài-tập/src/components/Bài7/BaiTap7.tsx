import React, { useState } from 'react'

export default function BaiTap7() {
    const [count, setCount] = useState<number>(0)
    const handleChange = () => {
        setCount(x=> x+1)
    }
  return (
      <div>
        Bt7:
        <br />
        <textarea onChange={handleChange}></textarea>
        <p>số ký tự: {count}</p>
      </div>
  )
}
