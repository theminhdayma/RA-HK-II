import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../actions";

export default function Count() {
  // Để lấy dữ liệu ở trong kho (store) thì dùng useSelector()
  //useSelector(): --> Kiểm tra xem state có thay đổi không
  //thì cập nhật lại UI
  // - Những state phải thay đổi: [...]
  const stateCount: any = useSelector((state) => {
    return state;
  });
//   console.log(1111, stateCount);

  //Muốn bắn action (những hành động tương tác)
  // => Dùng useDishpatch()
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(actionCount("INCREASE", 1));
  };

  const descrease = () => {
    dispatch(actionCount("DESCREASE", 1));
  };
  const nhan = () => {
    dispatch(actionCount("NHAN", 2));
  };
  return (
    <div>
      Count
      <p>giá trị của count: {stateCount.reducerCount}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={descrease}>giảm</button>
      <button onClick={nhan}>Nhân đôi</button>
    </div>
  );
}
