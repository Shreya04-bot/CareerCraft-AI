import React from "react";

export default function AIOptionsDisplay({ options, onSelect }) {
  if (!options) return null;

  const sortOrder = ["Expert", "Intermediate", "Fresher"];
  const sortedKeys = Object.keys(options).sort(
    (a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b)
  );

  return (
    <div className="space-y-6 relative">
      {sortedKeys.map((key) => (
        <div
          key={key}
          className="border rounded-2xl p-5 
                     bg-white dark:bg-[#0a001a] 
                     dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          {/* Card Header */}
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{key}</h4>

          {/* Card Content */}
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap mb-4">
            {options[key]}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded-xl font-medium text-white
                         bg-gradient-to-r from-purple-600 to-blue-600 
                         hover:from-purple-700 hover:to-blue-700 
                         shadow-lg hover:shadow-purple-500/40 transition-all duration-200"
              onClick={() => onSelect(options[key])}
            >
              Select
            </button>
            <button
              className="px-2 py-1 rounded-lg text-sm 
                         bg-gray-200 dark:bg-gray-800 
                         hover:bg-gray-300 dark:hover:bg-gray-700 
                         text-gray-800 dark:text-gray-200 transition-all duration-200"
              onClick={() => navigator.clipboard.writeText(options[key])}
            >
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
