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
  }, [count]); //when count changes, increment will be called

  // Memoized decrement function
  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1); // Use functional update to avoid stale state
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallbackHook;
