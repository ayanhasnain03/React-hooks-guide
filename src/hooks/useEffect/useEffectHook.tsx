import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
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
