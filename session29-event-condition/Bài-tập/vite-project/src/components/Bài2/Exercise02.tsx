import React, { useState } from 'react'

export default function Exercise02() {
    const [text, setText] = useState<string>("")
    const click = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <h2>Dữ liệu người dùng nhập: {text}</h2>
        <input onChange={click} type="text" />
    </div>
  )
}
