import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CoverLetterFormSection({ title, children, initiallyOpen = true }) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-200">
      <div
        className="flex justify-between items-center cursor-pointer group"
        onClick={() => setOpen((s) => !s)}
      >
        <h3 className="font-semibold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h3>
        <div className="text-gray-500 group-hover:text-indigo-600 transition-colors duration-200">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      {open && <div className="mt-4 pt-4 border-t border-gray-200">{children}</div>}
    </div>
  );
}