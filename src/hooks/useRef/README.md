# useRef Hook in React

## Purpose

The `useRef` hook allows you to directly reference DOM elements or store mutable values without causing re-renders. This makes it a powerful tool for managing direct DOM manipulations and preserving values across renders.

## Common Uses

### 1. Accessing DOM Elements

Use `useRef` to reference DOM elements for actions such as focusing an input field.

### 2. Storing Mutable Values

Store mutable values like timers or intervals without triggering component re-renders.

### 3. Keeping Previous State

Track the previous value of a state variable for comparison or conditional rendering.

## Example

Here’s a simple example demonstrating how to use the `useRef` hook to focus an input field:

```javascript
import React, { useRef } from "react";

const ExampleComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};
```
