import React from "react";

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

interface Props {
  products: Product[];
}

export default function ProductItem({ products }: Props) {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          Sản phẩm {item.productName} có giá là {item.price}
          <u>đ</u> và còn {item.quantity} sản phẩm
        </li>
      ))}
    </ul>
  );
}
