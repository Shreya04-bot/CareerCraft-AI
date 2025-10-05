// FinalActions.jsx - Updated UI
import React from "react";
import { Printer, FileText } from "lucide-react";
import { exportToTXT } from "../utils/txtExporter";

export default function FinalActions({ data }) {
  const handlePrint = () => {
    const templateContent = document.querySelector('#resume-template');

    if (!templateContent) {
      alert("Resume template not found!");
      return;
    }

    const printWindow = window.open('', '_blank');
    const clonedContent = templateContent.innerHTML;

    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${data.fullName || 'Resume'}</title>
        <link rel="stylesheet" href="${window.location.origin}/src/index.css">
        <style>
          body { 
            margin: 0; 
            padding: 0.5in;
            background: white;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page { margin: 0.5in; }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        </style>
      </head>
      <body>
        ${clonedContent}
      </body>
    </html>
  `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };



  const handleTXT = () => {
    exportToTXT(data, `${(data.fullName || "resume").replace(/\s+/g, "_")}.txt`);
  };

  return (
    <div className="w-full p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Info Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900">🎉 Your Resume is Ready!</h3>
        <p className="text-sm text-gray-600 mt-1">Print or download your professional resume</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center md:justify-end">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
        >
          <Printer className="w-5 h-5" />
          Print Resume
        </button>

        <button
          onClick={handleTXT}
          className="flex items-center gap-2 px-5 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
        >
          <FileText className="w-5 h-5" />
          Download TXT
        </button>
      </div>
      
    </div>
  );
}
