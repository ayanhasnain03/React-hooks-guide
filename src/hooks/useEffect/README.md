# useEffect Hook in React

## Purpose

The `useEffect` hook is used to perform side effects in functional components. Side effects include operations like data fetching, subscriptions, or manually changing the DOM. It helps you synchronize the component with external systems.

## Common Uses

1. **Data Fetching**: Fetch data from an API when the component mounts.
2. **Timers**: Set up timers or intervals.
3. **Subscriptions**: Subscribe to data sources (like WebSocket).
4. **Cleanup**: Clean up resources (like cancelling subscriptions or clearing timers) when the component unmounts or before the effect runs again.

## Example

The following example demonstrates a simple timer that increments every second using the `useEffect` hook:

```javascript
import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Increment count every second
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
    </div>
  );
};

export default TimerComponent;
```
