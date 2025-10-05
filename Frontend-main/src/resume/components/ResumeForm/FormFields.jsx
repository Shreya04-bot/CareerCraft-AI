// FormFields.jsx
import React from "react";

export function TextField({ label, value, onChange, placeholder, rows = 1 }) {
  const commonClasses = "w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none bg-white/50";

  if (rows > 1) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <textarea
          rows={rows}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${commonClasses} resize-vertical`}
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={commonClasses}
      />
    </div>
  );
}