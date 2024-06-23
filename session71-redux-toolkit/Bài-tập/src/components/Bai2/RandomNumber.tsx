import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { randoms } from "../../store/reducers/Bai2/randomNumberReducer";

export default function RandomNumber() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>List Number: {`[${state.randoms}]`}</p>
      <button onClick={() => dispatch(randoms())}>Random</button>
    </div>
  );
}
