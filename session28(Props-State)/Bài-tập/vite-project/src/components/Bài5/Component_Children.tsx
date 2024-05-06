import React from 'react'

interface Product {
    id: number,
    name: string,
    price: string,
    quantity: number,
}

interface Props {
    product: Product
}

export default function Component_Children({product}: Props) {
    const {id, name, price, quantity} = product
  return (
    <div>
        <h3>Thông tin Product</h3>
        <ul>
            <li>ID: {id}</li>
            <li>Tên sản phẩm: {name}</li>
            <li>giá tiền: {price}</li>
            <li>Số lượng: {quantity}</li>
        </ul>
    </div>
  )
}
