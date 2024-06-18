import { useDispatch, useSelector } from "react-redux";
import { actionChange } from "../../actions";

export default function ChangeState() {
  const stateChange: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionChange("CHANGESTATE", 1));
  };
  return (
    <div>
      <h1 className="text-2xl">{stateChange.reducerChange}</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        onClick={handleClick}
      >
        Change State
      </button>
    </div>
  );
}
