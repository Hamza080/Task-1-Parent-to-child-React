import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const handleClick1Remove = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h5>Count 1 is</h5>
      <div>{counter}</div>
      <div>
        <button onClick={handleClick1}>+</button>
        <button onClick={handleClick1Remove}>-</button>
      </div>
      <>
        <Counter
          counter={counter}
          setCounter={setCounter}
          handleClick1={handleClick1}
          handleClick1Remove={handleClick1Remove}
        />
      </>
    </>
  );
};

export default App;
