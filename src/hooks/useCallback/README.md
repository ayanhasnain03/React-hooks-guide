## Why Use `useCallback`?

The `useCallback` hook is essential for optimizing performance in React applications. Here are some key reasons to use `useCallback`:

1. **Prevent Unnecessary Re-renders**: When passing callback functions to memoized components (like our `Button` component), using `useCallback` ensures that the function reference remains stable across renders. This prevents the child components from re-rendering unless the dependencies change.

2. **Improved Performance**: In larger applications where components have complex hierarchies, using `useCallback` can lead to significant performance improvements by reducing the number of renders and re-calculations.

3. **Functional Updates**: By using the functional update form (`setCount((prevCount) => prevCount + 1)`), you ensure that the latest state is always used, avoiding potential stale state issues, especially in cases where the state may be updated asynchronously.

4. **Readability and Maintainability**: Explicitly defining dependencies and memoizing functions improves the readability of the code, making it clear when and why functions are recreated.

5. **Best Practices**: Using `useCallback` aligns with React's best practices for performance optimization, especially in functional components.

By understanding the "why" behind using `useCallback`, developers can make more informed decisions about state management and performance optimization in their applications.

## Example Code

Here’s the implementation of the `UseCallbackHook` component:

```tsx
import React, { memo, useCallback, useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void; // Define the type for onClick prop
}

// Memoized Button component
const Button = memo(({ children, onClick }: ButtonProps) => {
  console.log(`Button rendered`);
  return <button onClick={onClick}>{children}</button>;
});

// Main component
const UseCallbackHook: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Use TypeScript for state

  // Memoized increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // Use functional update to avoid stale state
  }, []); // No dependencies, function remains the same across renders

  // Memoized decrement function
  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1); // Use functional update to avoid stale state
  }, []); // No dependencies, function remains the same across renders

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallbackHook;
```
