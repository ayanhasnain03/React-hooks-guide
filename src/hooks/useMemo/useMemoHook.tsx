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
