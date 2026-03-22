import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }

  const decreament = ()=>{
    setCount(count-1)

  }
  const reset =()=>{
    setCount(0);
  }

  return (
    <>
      <div> The Current Number is : {count}</div>
      <button onClick={increament}> Increase </button>
      <button onClick={decreament}> Decrease </button>
      <button onClick={reset}> reset </button>
    </>
  );
}

export default Counter;
