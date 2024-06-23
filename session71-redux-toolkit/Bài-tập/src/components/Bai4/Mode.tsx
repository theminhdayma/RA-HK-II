import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mode } from "../../store/reducers/Bai4/modeReducer";

export default function Mode() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button className="border border-gray-500" onClick={() => dispatch(mode())}>
        {state.mode === true ? "List Mode" : "Grid mode"}
      </button>
      <div className={`w-[300px] h-[300px] border border-gray-500 p-4 flex ${state.mode === true ? "" : "flex-col"} justify-center items-center gap-5`}>
        <div className="w-full h-[30px] bg-red-500 flex justify-center items-center border border-red-500 p-4 ">1</div>
        <div className="w-full h-[30px] bg-red-500 flex justify-center items-center border border-red-500 p-4 ">2</div>
        <div className="w-full h-[30px] bg-red-500 flex justify-center items-center border border-red-500 p-4 ">3</div>
        <div className="w-full h-[30px] bg-red-500 flex justify-center items-center border border-red-500 p-4 ">4</div>
      </div>
    </div>
  );
}
