import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id, name, price } = useParams(); // Lấy dữ liệu trên params

  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Tên: {name}</h1>
      <h1>giá: {price} đ</h1>
    </div>
  );
}
