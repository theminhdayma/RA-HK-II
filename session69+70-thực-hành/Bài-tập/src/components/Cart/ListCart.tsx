import React from "react";
import { ProductType } from "../../interface/interface";
import Cart from "./Cart";

interface Props {
  cartProduct: ProductType[];
}

export default function ListCart({ cartProduct }: Props) {
  
  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>
      <Cart
        // stateCart={stateCart}
        // productListCart={productListCart}
        // onDeleteProduct={handleDeleteProduct}
        // onUpdateProduct={handleUpdateProduct}
      />
    </div>
  );
}
