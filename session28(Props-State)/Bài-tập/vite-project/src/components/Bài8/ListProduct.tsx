import Product from "./Product "

export default function ListProduct() {
    const products = [
        {
            id: 1,
            name: "Cam sành",
            price: 15000,
            quantity: 10,
        },
        {
            id: 2,
            name: "Táo Mỹ",
            price: 20000,
            quantity: 5,
        },
        {
            id: 3,
            name: "Dưa hấu",
            price: 50000,
            quantity: 8,
        },
    ]
  return (
    <div>
        <Product products = {products}></Product>
    </div>
  )
}
