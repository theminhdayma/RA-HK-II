import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../../actions";

export default function Counter() {
  const stateCount: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(actionCount("INCREASE", 1));
  };

  const decrease = () => {
    dispatch(actionCount("DESCREASE", 1));
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-2xl font-bold mb-4">
        Giá trị của count: {stateCount.reducerCount}
      </h1>
      <div>
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-700"
        >
          Tăng
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          Giảm
        </button>
      </div>
    </div>
  );
}
