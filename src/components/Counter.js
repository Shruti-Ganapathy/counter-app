import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";
import "./styles.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <div className="display-box">{count}</div>
      <button className="increment-btn" onClick={() => dispatch(increment())}>+</button>
      <button className="decrement-btn" onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button className="reset-btn" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
