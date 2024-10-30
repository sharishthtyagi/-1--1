import React, { useState } from "react";

function Template() {
  const [initialValue, inBuiltFuncton] = useState(0);

  function increase() {
    inBuiltFuncton(initialValue + 1);
  }
  function decrease() {
    inBuiltFuncton(initialValue - 1);
  }

  return (
    <div className="container">
      <h1>{initialValue}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Template;
