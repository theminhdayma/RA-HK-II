import { useDispatch, useSelector } from "react-redux";
import { actionRandomNumber } from "../../actions";

export default function RandomNumber() {
  const stateRandomNumber: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const randomNumber = () => {
    dispatch(actionRandomNumber("ADDNUMBER", 1));
  };
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-2xl font-bold mb-4">
        {`[${stateRandomNumber.reducerRandomNumber}]`}
      </h1>
      <button
        onClick={randomNumber}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
      >
        Generate Random Number
      </button>
    </div>
  );
}
