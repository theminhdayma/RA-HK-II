import React from 'react'

export default function UseCalkback() {
  return (
    <div>UseCalkback
        {/**
            Đây là 1 hook trong reactJs
            - Cách dùng: 
              import {useCallback} from "react"
                useCallback() :Nhận vào 2 đối số
                  1. callback là arrow function
                    => Xử lý logic
                  2. [] hoặc [dependency]
                    => Khi nào dependepcy nào thay đổi thì useCallback được goi
                    Tương tự như useEffect
         */}
    </div>
  )
}
