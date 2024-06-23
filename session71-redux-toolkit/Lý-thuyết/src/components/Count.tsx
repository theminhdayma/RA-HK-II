import { useDispatch, useSelector } from "react-redux";
import { chia, decrease, increase, nhan } from "../store/reducers/CountReducer";

export default function Count() {
  const state: any = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  return (
    <div>
      Count
      <p>Gía trị của Count: {state.count}</p>
      <button onClick={() => dispatch(increase())}>Tăng</button>
      <button onClick={() => dispatch(decrease())}>giảm</button>
      <button onClick={() => dispatch(nhan())}>Nhân đôi</button>
      <button onClick={() => dispatch(chia())}>Chia đôi</button>
    </div>
  );
}
