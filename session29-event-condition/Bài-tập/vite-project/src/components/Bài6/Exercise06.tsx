import React, { useState } from 'react'

export default function Exercise06() {
    const [check, setCheck] = useState<boolean>(true)
    const [contentBtn, setContentBtn] = useState<string>("Hiện")

    const hidden = () => {
        setCheck(!check)
        setContentBtn(check ? "Hiện" : "Ẩn")
    }
  return (
    <div>
        <button onClick={hidden}>{contentBtn}</button>
    </div>
  )
}
