import { useParams } from "react-router-dom";

export default function ProductDetail() {
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
  const { productId } = useParams();
  let productDetail = products.find((item) => {
    return item.id === Number(productId);
  });
  console.log(productDetail);
  

  return (
    <div>
      {productDetail ? (
        <div>
          <p>Tên: {productDetail.name}</p>
          <p>Tuổi: {productDetail.age}</p>
          <img style={{ width: "200px" }} src={productDetail.image} alt="" />
          <p>giới thiệu: {productDetail.description}</p>
          <button>Yêu thích</button>
        </div>
      ) : (
        <p>Sản phẩm không tồn tại</p>
      )}
    </div>
  );
}
