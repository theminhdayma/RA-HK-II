import { Outlet, useNavigate } from "react-router-dom";
import "./product.css";
export default function Products() {
  const navigate = useNavigate();
  /*
        Lấy dữ liệu để render

        - fetch data: tạo mock data trước
    */

  let products = [
    {
      id: 1,
      name: "Thế Minh 1",
      age: 19,
      description: "Siêu đẹp trai",
      image: "./src/assets/daylatoi.jpg",
    },
    {
      id: 2,
      name: "Thế Minh 2",
      age: 19,
      description: "Siêu đẹp trai",
      image: "./src/assets/daylatoi.jpg",
    },
    {
      id: 3,
      name: "Thế Minh 3",
      age: 19,
      description: "Siêu đẹp trai",
      image: "./src/assets/daylatoi.jpg",
    },
    {
      id: 4,
      name: "Thế Minh 4",
      age: 19,
      description: "Siêu đẹp trai",
      image: "./src/assets/daylatoi.jpg",
    },
  ];
  const handleClick = (id: number) => {
    navigate(`/product-detail/${id}`);
  };
  return (
    <div>
      <div className="container">
        {products.map((item) => (
          <div key={item.id}>
            <p>Tên: {item.name}</p>
            <p>Tuổi: {item.age}</p>
            <img style={{ width: "200px" }} src={item.image} alt="" />
            <p>giới thiệu: {item.description}</p>
            <button>Yêu thích</button>
            <button onClick={() => handleClick(item.id)}>Xem chi tiết</button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
