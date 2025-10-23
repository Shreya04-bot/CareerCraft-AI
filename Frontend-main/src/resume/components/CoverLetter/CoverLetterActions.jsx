import React from "react";
import { Printer, FileText, Clipboard } from "lucide-react";
import { exportToTXTUniversal } from "../../utils/txtExporter";

export default function CoverLetterActions({ coverLetterId = "cover-letter-template", data, resumeData }) {

  // Copy cover letter to clipboard
  const handleCopy = async () => {
    if (!resumeData) return alert("Resume data not found!");

    try {
      const coverLetterText = exportToTXTUniversal(data, resumeData, null, true, true);
      if (!coverLetterText) return alert("No cover letter content found!");

      await navigator.clipboard.writeText(coverLetterText);
      alert("✅ Cover letter copied to clipboard!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to copy cover letter. Try again.");
    }
  };

  // Download cover letter as TXT
  const handleTXTDownload = () => {
    if (!resumeData) return alert("Resume data not found!");

    exportToTXTUniversal(
      data,
      resumeData,
      `cover-letter-${data.companyName || "company"}.txt`,
      false,
      true
    );
  };

  // Print / PDF
  const handlePrint = () => {
    if (!resumeData) return alert("Resume data not found!");

    const templateContent = document.querySelector(`#${coverLetterId}`);
    let printContent = "";

    if (templateContent) {
      // Clone DOM content for PDF/print
      printContent = templateContent.innerHTML;
    } else {
      // Fallback: use plain text from exporter
      const coverLetterText = exportToTXTUniversal(data, resumeData, null, true, true);
      if (!coverLetterText) return alert("No cover letter content found!");
      printContent = `<pre>${coverLetterText}</pre>`;
    }

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Cover Letter - ${resumeData?.fullName || "Candidate"}</title>
          <style>
            body { 
              font-family: Georgia, serif;
              padding: 1in;
              background: white;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            pre { font-family: inherit; font-size: 16px; }
          </style>
        </head>
        <body>
          ${printContent}
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

  return (
    <div className="w-full p-6 bg-white/90 dark:bg-[#37247d] backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🎉 Your Cover Letter is Ready!</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Print, copy, or download your professional cover letter</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center md:justify-end">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-3 border border-white-700 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
        >
          <Printer className="w-5 h-5" />
          Print
        </button>

        <button
          onClick={handleTXTDownload}
          className="flex items-center gap-2 px-5 py-3 border border-white-700 bg-gray-700 hover:bg-gray-800 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
        >
          <FileText className="w-5 h-5" />
          Download TXT
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-5 py-3 border border-white-700 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
        >
          <Clipboard className="w-5 h-5" />
          Copy
        </button>
      </div>
    </div>
  );
}
