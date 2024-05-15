import React, { useState } from "react";
import CartChildren from "./CartChildren";

interface Carts {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
  number: number;
}

export default function Cart() {
  const [carts, setCarts] = useState<Carts[]>(() => {
    const storedCarts = localStorage.getItem("listCart");
    return storedCarts ? JSON.parse(storedCarts) : [];
  });

  const updateCart = (updatedCarts: Carts[]) => {
    setCarts(updatedCarts);
  };

  const renderCart = () => {
    return carts.map((cart) => (
      <CartChildren key={cart.id} cart={cart} onUpdateCart={updateCart} />
    ));
  };

  return (
    <div className="tableCart">
      <h2>Cart</h2>
      <div className="crossbar"></div>
      <div className="productList">{renderCart()}</div>
      <div className="crossbar"></div>
      <span>Tổng tiền: 111111111</span>
    </div>
  );
}
