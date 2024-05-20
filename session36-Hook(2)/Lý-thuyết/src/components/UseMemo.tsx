import React, { useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

let cart: Product[] = [
    {
      id: 1,
      name: "car",
      price: 10000,
      quantity: 10,
    },
    {
      id: 2,
      name: "phone",
      price: 5000,
      quantity: 20,
    },
    {
      id: 3,
      name: "moto",
      price: 8000,
      quantity: 15,
    },
  ];

export default function UseMemo() {
  const [count, setCount] = useState<number>(0);
  const [myCart, setMyCart] = useState<Product[]>(cart)

  /**
       Ở đây có logic tính toán như sau
     */

  // Đi tính toán giá phải trả

//   console.log("tHÀNH TIỀN: ", payment);

  let price = useMemo(() => {
    let payment = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    return payment
  }, [myCart]);

//   khai báo 1 newProduct rồi thêm vào cart 
  const addToCart = () => {
    let newProduct: Product = {
        id: 4,
        name: "laptop",
        price: 20000,
        quantity: 10
    }
    // Thêm
    myCart.push(newProduct)
    setMyCart([...myCart])
  }

  return (
    <div>
      UseMemo
      <p>Gía phải trả: {price}</p>
      <button onClick={() => setCount(count + 1)}>Click useMemo</button>
      <button onClick={addToCart}>add product</button>
      {/*
            Là 1 hook trong react
            memory: ghi nhớ
            Sinh ra để giải quyết vấn đề gi ?
              - Sinh ra giúp ghi nhớ lại những tính toán phức tạp và chỉ 
              tính toán lại khi cần thiết
        */}
    </div>
  );
}
