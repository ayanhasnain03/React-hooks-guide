# useReducer Hook in React

## Purpose

The `useReducer` hook is an alternative to `useState` for managing complex state logic in functional components. It allows you to handle state transitions in a more structured way, especially when the next state depends on the previous state or when managing multiple related state variables.

## Common Uses

1. **Complex State Logic**: Managing complex state transitions that involve multiple sub-values.
2. **Global State Management**: Handling state in larger applications where state is shared across multiple components.
3. **Form Handling**: Managing the state of form inputs that involve validation and multiple fields.

## Example

The following example demonstrates a counter component that uses the `useReducer` hook:

```javascript
import React, { useReducer } from "react";

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // Initialize state with useReducer

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterComponent;
```
