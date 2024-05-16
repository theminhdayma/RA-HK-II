import React, { useState } from "react";


export default function UseState() {
  // cú pháp destructoring
  let cart=[
    {
      name:"iphone5",
      price:5000,
      quantity:5,
    },
    {
      name:"iphone6",
      price:6000,
      quantity:6,
    },
    {
      name:"iphone7",
      price:7000,
      quantity:7,
    },
  ];


  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [price, setPrice] = useState<number>(()=>{
    return cart.reduce((curentValue, item)=>{
      return curentValue + item.price * item.quantity
    },0)
  });

  const handleClick = () => {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  };

  // sử dụng batch update
  console.log("component re-render.");
  console.log("Giá: ", price);

  return (
    <div>
      UseState
      {/* 
      
        useState = use + state (sử dụng trạng thái)
        trạng thái của dữ liệu tức là khi dữ liệu thay đổi thì giao diện nó thay đổi theo
        các hook là các phương thức được React cung cấp cho nên khi sử dụng các em phải import vào để dùng 
        bản chất useState là 1 function trả về 1 cái mảng [] có 2 phần tử.
        "minh thu", 0 được gọi là giá trị khởi tạo (initial-value)
        khi setCount thì component re-render lại 
        - khi có nhiều useState giống nhau cùng chạy 1 lúc thì sẽ đưa hết các useSteta vào 1 các queue (hàng đợi) để xử lý
        - đối với kĩ thuật batch-update thì nó sẽ lấy giá trị trả về của useState trước làm giá trị tham số đầu vào của useState sau.
        - initial của useState

      */}
      <p>Giá trị biến đếm count: {count}</p>
      <button onClick={handleClick}>Tăng count</button>
      <p>Giá phải trả: {price}</p>
    </div>
  );
}
