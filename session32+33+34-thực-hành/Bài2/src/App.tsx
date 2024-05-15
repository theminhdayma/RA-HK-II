import React, { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Data from "./components/Data";

interface Products {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
}

interface Cart {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
  number: number;
}

export default function App() {
  const [storedProducts, setStoredProducts] = useState<Products[]>(() => {
    const listProduct: Products[] = JSON.parse(
      localStorage.getItem("listProduct") || "[]"
    );
    if (listProduct.length === 0) {
      return [];
    }
    return listProduct;
  });
  const [listCart, setListCart] = useState<Cart[]>(() => {
    const listCart: Cart[] = JSON.parse(
      localStorage.getItem("listCart") || "[]"
    );
    if (listCart.length === 0) {
      return [];
    }
    return listCart;
  });

  const addCart = (item: Products) => {
    localStorage.setItem(
      "listCart",
      JSON.stringify([
        ...listCart,
        {
          id: item.id,
          name: item.name,
          img: item.img,
          price: item.price,
          quantity: item.quantity,
          number: 1,
        },
      ])
    );

    setListCart([
      ...listCart,
      {
        id: item.id,
        name: item.name,
        img: item.img,
        price: item.price,
        quantity: item.quantity,
        number: 1,
      },
    ]);
    
    let findItem: Cart | undefined = listCart.find((e) => e.id === item.id);
    if (findItem) {
      const list = listCart.map((item) => {
        if(findItem.id === item.id){
          return {...item, number: item.number+1}
        }
        return item;
      })
      setListCart(list);
      localStorage.setItem("listCart", JSON.stringify(list))
    } else {
      localStorage.setItem(
        "listCart",
        JSON.stringify([
          ...listCart,
          {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: item.quantity,
            number: 1,
          },
        ])
      );

      setListCart([
        ...listCart,
        {
          id: item.id,
          name: item.name,
          img: item.img,
          price: item.price,
          quantity: item.quantity,
          number: 1,
        },
      ]);
    }
  };
  return (
    <div className="full-backgroud">
      <Header listCart={listCart}/>
      <Product addCart={addCart} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Data/>
    </div>
  );
}
