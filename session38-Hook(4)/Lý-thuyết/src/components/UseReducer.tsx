import React, { useReducer } from "react";

export default function UseReducer() {
  // Khai báo giá trị khởi tạo
  const initial: number = 0;
  // Khởi tạo hàm reducer
  const reducer = (state = initial, action: any) => {
    console.log(action);
    switch (action.type) {
      case "INCREASE":
        return state + action.payload;
      case "DECREASE":
        return state - action.payload;
      default:
        return state;
    }
  };

  //  Đối với những action có dữ liệu phức tạp thì nên tạo 1 function
  const action = (type: string, payload: number) => {
    return {
      // Cách dùng 1
      type: type,
      payload: payload,
      // Cách dùng 2
      // type,
      // payload,
    };
  };

  // Dùng destructoring để hứng lấy kết quả

  const [count, dispatch] = useReducer(reducer, initial);

  // Hàm tăng count
  const increse = () => {
    dispatch(action("INCREASE", 1));
  };

  // Hàm giảm count
  const decrese = () => {
    dispatch(action("DECREASE", 1));
  };
  return (
    <div>
      <p>giá trị của biến count: {count}</p>
      <button onClick={increse}>Tăng</button>
      <button onClick={decrese}>giảm</button>
      {/**
            - Là 1 hook trong react
            Sinh ra để làm gì ?
              1. Sinh ra để quản lý các state phức tạp
                - Khi muốn quản lý state thì thường sử dụng useState 
                (quản lý những state đkơn giản)
                - Những gì useState làm được thì useReducer cũng làm được
                nhưng nó sẽ quản lý những state phức tạp hơn
              2. Tiền đề sau này học Redux (thư viện giúp tạo ra 1 kho dữ liệu)

            Cách dùng ?
              - Phải import 
              - useReducer();
                + Nhận vào 2 tham số
                  1. Hàm reducer
                  2. Gía trị khởi tạo
                
         */}
    </div>
  );
}
