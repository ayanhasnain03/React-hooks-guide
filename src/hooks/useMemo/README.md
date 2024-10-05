# LargeDatasetFilter Component

## Overview

The `LargeDatasetFilter` component is a React application that demonstrates how to efficiently filter through a large dataset using the `useMemo` hook. This component is designed to help users understand the performance benefits of memoization when dealing with complex computations or large arrays.

## Purpose

The `useMemo` hook is used to memoize the result of a computation, preventing unnecessary recalculations and re-renders. In this example, it helps to optimize the filtering of a large dataset by recomputing the filtered items only when the filter input changes.

## Features

- Dynamically filter through a large dataset of 1000 items.
- Use of `useMemo` for performance optimization.
- Real-time updates as the user types in the input field.

## Example Code

Here's the implementation of the `LargeDatasetFilter` component:

```javascript
import React, { useState, useMemo } from "react";

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const LargeDatasetFilter = () => {
  const [filter, setFilter] = useState("");

  // Memoized filtered dataset
  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    return data.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]); // Recompute only when `filter` changes

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Filter Large Dataset</h1>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <h3>Filtered Items:</h3>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LargeDatasetFilter;
```
