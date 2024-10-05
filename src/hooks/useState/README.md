# useState Hook in React

## Purpose

The `useState` hook is used to add state to functional components in React. It allows you to manage and update component state, making your components dynamic and interactive.

## Common Uses

1. **Form Inputs**: Managing the state of input fields in forms.
2. **Toggle States**: Handling toggle switches, like showing or hiding elements.
3. **Counters**: Implementing counters that can be incremented or decremented.
4. **Dynamic Data**: Storing and updating data that affects the rendering of the component.

## Example

The following example demonstrates a simple counter component that uses the `useState` hook:

```javascript
import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0); // Initialize state with a value of 0

  const increment = () => {
    setCount(count + 1); // Increment count by 1
  };

  const decrement = () => {
    setCount(count - 1); // Decrement count by 1
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
```
