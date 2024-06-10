import Product from "./Product";

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
}

export default function ProductList({addProduct} :Props) {
  return (
    <table>
      <thead>
        <tr className="title-tr">
          <td>#</td>
          <td>Tên sản phẩm</td>
          <td>Hình ảnh</td>
          <td>Giá</td>
          <td>Số lượng</td>
          <td>Ngày thêm</td>
          <td>Chức năng</td>
        </tr>
      </thead>
      <tbody>
        <Product addProduct={addProduct} />
      </tbody>
    </table>
  );
}
