// src/components/AIOptionsDisplay.jsx
import React from "react";

export default function AIOptionsDisplay({ options, onSelect }) {
  if (!options) return null;

  // Helper to render a value (string or array of lines)
  const renderText = (value) => {
    if (!value) return "...";
    if (Array.isArray(value)) return value.join(" "); // join array into string
    if (typeof value === "object") {
      // nested object (like Short/Detailed)
      return Object.entries(value).map(([subKey, subVal]) => (
        <div key={subKey} className="mb-2">
          <h5 className="font-medium">{subKey}</h5>
          <p>{renderText(subVal)}</p>
        </div>
      ));
    }
    return value; // plain string
  };

  return (
    <div className="space-y-4">
      {Object.keys(options).map((key) => (
        <div key={key} className="border p-4 rounded bg-gray-50">
          <h4 className="font-semibold mb-1">{key}</h4>
          <div>{renderText(options[key])}</div>
          <button
            className="mt-2 px-3 py-1 bg-indigo-500 text-white rounded"
            onClick={() => onSelect(options[key])}
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
}
