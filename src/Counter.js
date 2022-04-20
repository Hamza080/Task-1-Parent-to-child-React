import React, { useState } from "react";
import Counters from "./Counters";

function Counter(props) {
  console.log(props);
  const [count, setCount] = useState(0);

  const handleClick2 = () => {
    setCount((prevCount) => prevCount + 2);
  };
  const handleClick2Remove = () => {
    setCount((prevCount) => prevCount - 2);
  };

  return (
    <>
      <h2> Component 2 is </h2>
      <>
        <h5> Count 1 is </h5>
        <div>{props.counter}</div>
        <button onClick={props.handleClick1}>+</button>
        <button onClick={props.handleClick1Remove}>-</button>

        <h5>Count 2 is</h5>
        <div>{count}</div>
        <button onClick={handleClick2}>+</button>
        <button onClick={handleClick2Remove}>-</button>
      </>

      <>
        <Counters
          counter={props.counter}
          count={count}
          setCount={setCount}
          handleClick2={handleClick2}
          handleClick2Remove={handleClick2Remove}
          handleClick1={props.handleClick1}
          handleClick1Remove={props.handleClick1Remove}
        />
      </>
    </>
  );
}

export default Counter;
