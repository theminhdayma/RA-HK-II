import { useDispatch, useSelector } from "react-redux";
import { check } from "../../store/reducers/Bai3/lightDark";

export default function LightDark() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-[250px] h-[250px] ${
        state.check === true ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col items-center justify-center gap-5`}
    >
      <input onChange={() => dispatch(check())} type="checkbox" />
      <p>{state.check === true ? "Tối" : "Sáng"}</p>
    </div>
  );
}
