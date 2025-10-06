import React, { useState } from "react";

export default function AIOptionsDisplay({ options, onSelect }) {
  const [selectedType, setSelectedType] = useState("Short");

  if (!options) return null;

  const subOptions = options[selectedType] || {}; // Fresher / Intermediate / Expert

  return (
    <div className="space-y-4">
      {/* Top-level selection: Short / Detailed */}
      <div>
        <label className="mr-2 font-medium">Select Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {Object.keys(options).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Sub-options: Fresher / Intermediate / Expert */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(subOptions).map(([level, text]) => (
          <div
            key={level}
            className="border p-4 rounded bg-gray-50 flex flex-col justify-between"
          >
            <h5 className="font-medium mb-2">{level}</h5>
            <p className="mb-2">{text}</p>
            <button
              className="mt-auto px-3 py-1 bg-indigo-500 text-white rounded"
              onClick={() => onSelect(text)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
