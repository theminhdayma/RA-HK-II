import React, { useState } from 'react'

interface User{
    id: number,
    name: string,
    price: string,
    quantity: number
}

export default function BaiTap2() {
    const [user, setUser] = useState<User>({
        id: 1,
        name: "Coca Cola",
        price: "1000 $",
        quantity:10
    })
  return (
      <div>
          Bt2:
          <br />
          <h2>thông tin sản phẩm:</h2>
          <p>id: { user.id}</p>
          <p>Name: { user.name}</p>
          <p>price: { user.price}</p>
          <p>quantity: { user.quantity}</p>
      </div>
  )
}
