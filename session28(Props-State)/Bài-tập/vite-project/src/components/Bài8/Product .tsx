import React from 'react'

interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

interface Props {
    products: Product[]
}
export default function Product (props: Props) {
    const {products} = props
  return (
    <div>
        <table style={{width: 400}}>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
