import React, { useEffect } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: string;
  quantity: number;
  created_at: string;
}

export default function Baitap2_3_4_5_6() {
  // Bài 2
  const getAllProduct = () => {
    fetch(`http://localhost:3000/products`)
      .then((res: Response) => res.json())
      .then((data: Product[]) => console.log("Bài 2", data))
      .catch((err) => console.error(err));
  };
  getAllProduct();
  useEffect(() => {
    getAllProduct();
  }, []);

  // Bài 3
  const getProductById = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res: Response) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Không tìm thấy bản ghi");
        }
      })
      .then((data: Product) => console.log("Bài 3: ", data))
      .catch((err) => console.error(err.message));
  };
  getProductById(4);
  getProductById(22);

  // Bài 4
  const removeProductById = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res: Response) => {
        if (res.ok) {
          console.log(`Sản phẩm có id ${id} đã được xóa thành công.`);
          getAllProduct();
        } else {
          throw new Error(`Xóa sản phẩm có id ${id} không thành công.`);
        }
      })
      .catch((err) => console.error(err.message));
  };
  removeProductById(2);

  //Bài 5
  let product: Product = {
    id: 30,
    product_name: "product_30",
    image: "image_30",
    price: "3000 USD",
    quantity: 100,
    created_at: "2024/12/12",
  };
  const createProduct = (product: Product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res: Response) => {
        if (res.ok) {
          console.log("Sản phẩm mới đã được thêm thành công.");
          getAllProduct();
        } else {
          throw new Error("Thêm sản phẩm không thành công.");
        }
      })
      .catch((err) => console.error(err.message));
  };
  createProduct(product);

  // Bài 6
  let updatedProduct: Product = {
    id: 30,
    product_name: "product_30_updated",
    image: "image_30_updated",
    price: "3500 USD",
    quantity: 150,
    created_at: "2024/12/12",
  };

  const updateProductById = (id: number, updatedProduct: Product) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res: Response) => {
        if (res.ok) {
          console.log(`Sản phẩm có id ${id} đã được cập nhật thành công.`);
          getAllProduct();
        } else {
          throw new Error(`Cập nhật sản phẩm có id ${id} không thành công.`);
        }
      })
      .catch((err) => console.error(err.message));
  };

  updateProductById(30, updatedProduct);
  return <div></div>;
}
