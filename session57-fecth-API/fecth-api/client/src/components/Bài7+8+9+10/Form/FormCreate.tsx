import { useState } from "react";

interface Product {
  id: string;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

interface Props {
  products: Product[];
  addProduct: (newProduct: Product) => void;
  closeForm: () => void;
}

export default function FormCreate({ products, addProduct, closeForm }: Props) {
  const [newProduct, setNewProduct] = useState<Product>({
    id: `${Math.floor(Math.random() * 9999999999)}`,
    product_name: "",
    image:
      "https://img1.kienthucvui.vn/uploads/2019/10/30/hinh-anh-rau-cu-qua_112154470.jpg",
    price: 0,
    quantity: 0,
    created_at: new Date().toISOString(),
  });

  const handleCreate = (e: React.FormEvent) => {
    // e.preventDefault();

    // Xác thực dữ liệu
    if (
      !newProduct.product_name ||
      !newProduct.image ||
      newProduct.price <= 0 ||
      newProduct.quantity <= 0
    ) {
      // Hiển thị thông báo lỗi
      return;
    }

    // Kiểm tra tên sản phẩm có trùng không
    const isDuplicate = products.some(
      (item) => item.product_name === newProduct.product_name
    );
    if (isDuplicate) {
      // Hiển thị thông báo lỗi
      return;
    }

    // Gửi yêu cầu POST đến API
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res: Response) => {
        if (res.ok) {
          // Cập nhật danh sách sản phẩm
          addProduct(newProduct);

          // Đóng form
          closeForm();

          // Reset lại form
          resetForm();
        }
      })
      .catch((err) => console.log(err));
  };

  const resetForm = () => {
    setNewProduct({
      id: `${Math.floor(Math.random() * 9999999999)}`,
      product_name: "",
      image:
        "https://img1.kienthucvui.vn/uploads/2019/10/30/hinh-anh-rau-cu-qua_112154470.jpg",
      price: 0,
      quantity: 0,
      created_at: new Date().toISOString(),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div className="modal">
      <form>
        <h3>Thêm mới sản phẩm</h3>
        <div className="input-box">
          <label htmlFor="product_name">Tên sản phẩm</label>
          <input
            name="product_name"
            type="text"
            value={newProduct.product_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="image">Hình ảnh (url)</label>
          <input
            name="image"
            type="text"
            value={newProduct.image}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="price">Giá</label>
          <input
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="quantity">Số lượng</label>
          <input
            name="quantity"
            type="number"
            value={newProduct.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="button-box">
          <button type="button" onClick={closeForm}>
            Hủy
          </button>
          <button onClick={handleCreate} type="submit">Thêm mới</button>
        </div>
      </form>
    </div>
  );
}
