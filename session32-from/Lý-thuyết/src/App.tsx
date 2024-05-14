import React from 'react'
import Form from './components/Form'

export default function App() {
  return (
    <div>
      <p>Các kĩ thuật làm việc với from</p>
      {/*
        - Có 2 kỹ thuật chính: 
          1. controlled
          2. uncontrolled (hook useRef)
          3. dùng thư viện formirk

          TRONG FORM
            1. ô inout
            2. textarea
            3. select - option
       */}
       <Form/>
    </div>
  )
}
