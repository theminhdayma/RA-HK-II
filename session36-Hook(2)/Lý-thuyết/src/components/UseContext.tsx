import React, { createContext, useState } from 'react'
import A from './A'

export const SetUseContext = createContext("")

export default function UseContext() {
    const [name, setName] = useState<string>("Thế Minh");
  return (
    <div>UseContext
        {/*
            Đây là 1 hook
            Sinh ra giải quyết vấn đề gi ?
            Dùng như thế nào ?
        */}
        <SetUseContext.Provider value={name}>
            <A/>
        </SetUseContext.Provider>
    </div>
  )
}
