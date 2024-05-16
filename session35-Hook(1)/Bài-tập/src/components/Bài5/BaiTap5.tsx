import React, { useState } from 'react'

export default function BaiTap5() {
    const [text, setTexe] = useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTexe(e.target.value)
    }
  return (
      <div>
          <input onChange={handleChange} type="text" />
          <p>Text: {text}</p>
      </div>
  )
}
