import { useDispatch, useSelector } from "react-redux";
import { actionCheck } from "../../actions";

export default function Checkbox() {
  const stateCheck: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(actionCheck("CHECKBOX", 1));
  };
  return (
    <div
      className={`w-[300px] h-[300px] border flex items-center justify-center flex-col gap-5 ${
        stateCheck.reducerCheck === true ? "bg-black" : "bg-white"
      }`}
    >
      <input
        onChange={handleChange}
        type="checkbox"
        className="form-checkbox text-blue-600 h-5 w-5"
      />
      <label
        className={
          stateCheck.reducerCheck === true ? "text-white" : "text-black"
        }
        htmlFor=""
      >
        {stateCheck.reducerCheck === true ? "Tối" : "Sáng"}
      </label>
    </div>
  );
}
