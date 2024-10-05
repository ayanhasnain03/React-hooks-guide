import { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);
  const dec = () => counter > 0 && setCounter(counter - 1);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};
export default UseStateHook;
