import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
