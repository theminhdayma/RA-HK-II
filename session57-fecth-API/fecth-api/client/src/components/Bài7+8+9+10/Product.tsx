import { useEffect, useState } from "react";
import swal from "sweetalert";
import FormUpdate from "./Form/FormUpdate";

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

export default function Product({addProduct}: Props) {
  const [showFormUpdate, setShowFormUpdate] = useState<boolean>(false)
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  // Lấy dữ liệu từ API
  const fecthData = () => {
    fetch("http://localhost:3000/products")
      .then((res: Response) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Lỗi", err));
  };

  useEffect(() => {
    fecthData();
  }, []);

  // Hàm xóa sản phẩm
  const handleDelete = (id: string, name: string) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then((res: Response) => {
      if (res.ok) {
        swal({
          title: `Bạn có chắc chắn muốn xóa sản phẩm ${name} không ?`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete: boolean) => {
          if (willDelete) {
            fecthData();
            swal(`Đã xóa sản phẩm ${name}`, {
              icon: "success",
            });
          } else {
            swal(`Hủy xóa sản phẩm ${name}`);
          }
        });
      }
    });
  };

  // Hàm chỉnh sửa sản phẩm
  const handleUpdate = (id: string) => {
    setSelectedProductId(id)
    setShowFormUpdate(true)
  }

  const closeFormUpdate = () => {
    setShowFormUpdate(false)
  }
  return (
    <>
      {products.map((item, index) => (
        <tr key={item.id} className="student-tr">
          <td>{index + 1}</td>
          <td>{item.product_name}</td>
          <td>
            <img src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.created_at}</td>
          <td>
            <button onClick={() => handleUpdate(item.id)}>Sửa</button>
            {showFormUpdate && (<FormUpdate addProduct={addProduct} closeFormUpdate={closeFormUpdate} id={selectedProductId}/>)}
            <button onClick={() => handleDelete(item.id, item.product_name)}>
              Xóa
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
