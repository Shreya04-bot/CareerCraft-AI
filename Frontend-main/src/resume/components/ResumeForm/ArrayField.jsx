// ArrayField.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

export default function ArrayField({ title, items, fields, onChange, onAdd, onRemove }) {
  return (
    <div className="mb-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>
        <button 
          onClick={onAdd} 
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      {items && items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-gray-200 bg-white/50 shadow-xs">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700">
                  {title} #{idx + 1}
                </span>
                <button 
                  onClick={() => onRemove(idx)} 
                  className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  <Trash2 className="w-3 h-3" />
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <div key={f.field} className={f.rows > 1 ? 'md:col-span-2' : ''}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {f.label}
                    </label>
                    {f.rows && f.rows > 1 ? (
                      <textarea
                        rows={f.rows}
                        value={item[f.field] || ""}
                        onChange={(e) => onChange(idx, f.field, e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none resize-vertical"
                        placeholder={`Enter ${f.label.toLowerCase()}...`}
                      />
                    ) : (
                      <input
                        type={f.field.includes('date') ? 'date' : 'text'}
                        value={item[f.field] || ""}
                        onChange={(e) => onChange(idx, f.field, e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 outline-none"
                        placeholder={`Enter ${f.label.toLowerCase()}...`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500 bg-white/30 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-sm">No items added yet.</p>
          <p className="text-xs mt-1">Click "Add New" to create your first entry</p>
        </div>
      )}
    </div>
  );
}