import React from "react";

interface Carts {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
  number: number;
}

interface Props {
  onUpdateCart: (onUpdateCart: Carts[]) => void;
  cart: Carts;
}

export default function CartChildren({ cart, onUpdateCart }: Props) {
  const storedCarts = localStorage.getItem("listCart");
  const carts: Carts[] = storedCarts ? JSON.parse(storedCarts) : [];

  const updateLocalStorage = (updatedCart: Carts) => {
    const storedCarts = localStorage.getItem("listCart");
    const carts: Carts[] = storedCarts ? JSON.parse(storedCarts) : [];
    const updatedCarts = carts.map((item) =>
      item.id === updatedCart.id ? updatedCart : item
    );
    localStorage.setItem("listCart", JSON.stringify(updatedCarts));
    onUpdateCart(updatedCarts); // Trigger re-render in parent component
  };

  const removeLocalStorage = (id: string) => {
    const storedCarts = localStorage.getItem("listCart");
    const carts: Carts[] = storedCarts ? JSON.parse(storedCarts) : [];
    const updatedCarts = carts.filter((item) => item.id !== id);
    localStorage.setItem("listCart", JSON.stringify(updatedCarts));
    onUpdateCart(updatedCarts); // Trigger re-render in parent component
  };


  const upQuantity = (id: string) => {
    const updatedCart = { ...cart, number: cart.number + 1 };
    // cập nhật lại local và render
    updateLocalStorage(updatedCart);
  };

  const downQuantity = (id: string) => {
    if (cart.number > 1) {
      const updatedCart = { ...cart, number: cart.number - 1 };
      updateLocalStorage(updatedCart)
    } else {
      removeLocalStorage(id)
    }
  };

  return (
    <div>
      <div className="item" key={cart.id}>
        <img className="imgCrile" src={cart.img} alt={cart.name} />
        <h6 className="infoPhone">{cart.name}</h6>
        <div className="upDown">
          <button onClick={() => upQuantity(cart.id)}>+</button>
          <span>{cart.number}</span>
          <button onClick={() => downQuantity(cart.id)}>-</button>
        </div>
        <button className="btn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
