import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../../store/reducers/Bai1/countReducer";


export default function Count() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      Count
      <p>Gía trị của Count: {state.count}</p>
      <button onClick={() => dispatch(increase())}>Tăng</button>
      <button onClick={() => dispatch(decrease())}>giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
