import { useEffect, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList"; // Giả sử bạn có một component ProductList để hiển thị danh sách sản phẩm
interface Product {
  id: string;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}
export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  // Lấy dữ liệu từ API khi component được mount
  const fetchData = () => {
    fetch("http://localhost:3000/products")
      .then((res: Response) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Lỗi", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <Header products={products} addProduct={addProduct} />
      <ProductList addProduct={addProduct}/>
    </div>
  );
}
