import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state: any, action: any) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count > 0 ? state.count - 1 : 0 };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
export default UseReducerHook;
