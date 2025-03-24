import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleReset = () => {
    setCount(0)
  };
  const handleIncrement = () => {
    const incre = count + 1;
    setCount(incre)
  };
  const handleDecrement = () => {
    const counter = Math.max(0, count - 1);
    setCount(counter);
  };
  return (
    <div className="card">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
