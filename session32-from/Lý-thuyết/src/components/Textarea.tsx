import React, { useState } from 'react'

export default function Textarea() {
    const [text, setText] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <textarea value={1111111111} onChange={handleChange} name="" id=""></textarea>
    </div>
  )
}
