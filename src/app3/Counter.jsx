import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((old) => old + 1);
  };

  const sub = () => {
    setCount((old) => old - 1);
  };
  return (
    <div>
      <button onClick={add}>+</button>
      <div>{count}</div>
      <button onClick={sub}>-</button>
    </div>
  );
}
