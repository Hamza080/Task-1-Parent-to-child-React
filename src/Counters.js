import React, { useState } from "react";

function Counters(props) {
  const [counters, setCounters] = useState(0);

  const handleClick3 = () => {
    setCounters((prevCount) => prevCount + 3);
  };
  const handleClick3Remove = () => {
    setCounters((prevCount) => prevCount - 3);
  };

  return (
    <>
      <h2> Component 3 is </h2>
      <>
        <h5> Count 1 is </h5>
        <div>{props.counter}</div>
        <button onClick={props.handleClick1}>+</button>
        <button onClick={props.handleClick1Remove}>-</button>

        <h5>Count 2 is</h5>
        <div>{props.count}</div>
        <button onClick={props.handleClick2}>+</button>
        <button onClick={props.handleClick2Remove}>-</button>

        <h5>Count 3 is</h5>
        <div>{counters}</div>
        <button onClick={handleClick3}>+</button>
        <button onClick={handleClick3Remove}>-</button>
      </>
    </>
  );
}

export default Counters;
