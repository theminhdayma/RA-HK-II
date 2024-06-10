import { useState } from "react";
import FormCreate from "./Form/FormCreate";
interface Product {
  id: string;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}
interface HeaderProps {
  products: Product[]
  addProduct: (newProduct: Product) => void;
}

export default function Header({products, addProduct }: HeaderProps) {
  const [formCreate, setFormCreate] = useState<boolean>(false);

  const handleCreate = () => {
    setFormCreate(true);
  };

  const closeForm = () => {
    setFormCreate(false);
  };

  return (
    <>
      <div className="first-header">
        <h2>Quản lý sản phẩm</h2>
        <button onClick={handleCreate}>Thêm mới sản phẩm</button>
      </div>
      <div className="second-header">
        <select name="" id="">
          <option selected value="">
            Không sắp xếp
          </option>
          <option value="">Sắp xếp theo giá</option>
        </select>
        <input type="text" placeholder="Tìm kiếm từ khóa theo tên sản phẩm" />
      </div>
      {formCreate && <FormCreate products={products} addProduct={addProduct} closeForm={closeForm} />}
    </>
  );
}
