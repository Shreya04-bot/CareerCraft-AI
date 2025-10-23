import React, { useState } from "react";

export default function AIOptionsDisplay({ options, onSelect, theme = "#6366F1" }) {
  const safeOptions = options || {};
  const typeKeys = Object.keys(safeOptions);

  const [selectedType, setSelectedType] = useState(typeKeys[0] || "Short");

  if (typeKeys.length === 0) return null;

  const subOptions = safeOptions[selectedType] || {};
  const sortOrder = ["Expert", "Intermediate", "Fresher"];
  const sortedLevels = Object.keys(subOptions).sort(
    (a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b)
  );

  return (
    <div className="space-y-6 relative">
      {/* Tab-style horizontal selection */}
      <div className="flex border-b border-gray-300 dark:border-gray-700 mb-4">
        {typeKeys.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 -mb-px font-medium transition-colors duration-200 ${
              selectedType === type
                ? `border-b-2 border-[${theme}] text-[${theme}]`
                : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Vertical stacked cards */}
      <div className="space-y-4">
        {sortedLevels.map((level) => {
          const text = subOptions[level];
          return (
            <div
              key={level}
              className="border rounded-xl p-5 
                         bg-white dark:bg-[#0a001a] 
                         dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              {/* Card Title */}
              <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{level}</h5>

              {/* Card Content */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                {text}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 rounded-xl font-medium text-white
                             bg-gradient-to-r from-purple-600 to-blue-600 
                             hover:from-purple-700 hover:to-blue-700 
                             shadow-lg hover:shadow-purple-500/40 transition-all duration-200"
                  onClick={() => onSelect(text)}
                >
                  Select
                </button>
                <button
                  className="px-2 py-1 rounded-lg text-sm
                             bg-gray-200 dark:bg-gray-800 
                             hover:bg-gray-300 dark:hover:bg-gray-700 
                             text-gray-800 dark:text-gray-200 transition-all duration-200"
                  onClick={() => navigator.clipboard.writeText(text)}
                >
                  Copy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
