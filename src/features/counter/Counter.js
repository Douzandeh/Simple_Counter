import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <span></span>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
