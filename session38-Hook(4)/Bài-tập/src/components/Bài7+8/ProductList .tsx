import React, { useState } from "react";
import ProductItem from "./ProductItem ";

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, productName: "Ô tô", price: 600000000, quantity: 5 },
    { id: 2, productName: "Moto", price: 200000000, quantity: 3 },
    { id: 3, productName: "Tivi", price: 50000000, quantity: 8 },
  ]);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ProductItem products={products} />
    </div>
  );
}
