import React, { useEffect, useRef } from 'react'

export default function FocusInput() {
    const forcusInput = useRef<HTMLInputElement>(null)
    useEffect(()=> {
        forcusInput.current?.focus()
    })
  return (
    <div>
        <input ref={forcusInput} type="text" />
    </div>
  )
}


