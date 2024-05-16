import React, { useState } from 'react'

export default function BaiTap3() {
    const [isChange, setIsChange] = useState<boolean>(false)
    const handleClick = () => {
        setIsChange(!isChange)
    }
  return (
      <div>
          <p style={{ color: isChange ? 'red' : 'black' }}>tiêu đề văn bản</p>
          <button onClick={handleClick}>thay đổi màu</button>
      </div>
  )
}
