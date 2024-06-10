import { useState, useEffect } from "react";

interface Product {
  id: string;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

interface Props {
  addProduct: (newProduct: Product) => void;
  closeFormUpdate: () => void;
  id: string;
}

export default function FormUpdate({ id, closeFormUpdate, addProduct }: Props) {
  const [product, setProduct] = useState<Product>({
    id: "",
    product_name: "",
    image: "",
    price: 0,
    quantity: 0,
    created_at: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res: Response) => res.json())
      .then((data: Product) => setProduct(data))
      .catch((err) => console.error("Lỗi", err));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res: Response) => {
        if (res.ok) {
          addProduct(product);
          // Đóng FormUpdate sau khi cập nhật
          closeFormUpdate();
          resetForm();
        }
      })
      .catch((err) => console.error(err));
  };

  const resetForm = () => {
    setProduct({
      id: "",
      product_name: "",
      image: "",
      price: 0,
      quantity: 0,
      created_at: "",
    });
  };

  return (
    <div className="modal">
      <form>
        <h3>Cập nhật sản phẩm</h3>
        <div className="input-box">
          <label htmlFor="product_name">Tên sản phẩm</label>
          <input
            name="product_name"
            type="text"
            value={product.product_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="image">Hình ảnh (url)</label>
          <input
            name="image"
            type="text"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="price">Giá</label>
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="quantity">Số lượng</label>
          <input
            name="quantity"
            type="number"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="button-box">
          <button onClick={handleUpdate} type="submit">
            Cập Nhật
          </button>
        </div>
      </form>
    </div>
  );
}
