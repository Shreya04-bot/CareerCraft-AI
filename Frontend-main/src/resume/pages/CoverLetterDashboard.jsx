// CoverLetterDashboard.jsx
import React, { useEffect, useState } from "react";
import CoverLetterForm from "../components/CoverLetter/CoverLetterForm";
import CoverLetterPreview from "../components/CoverLetter/CoverLetterPreview";
import CoverLetterActions from "../components/CoverLetter/CoverLetterActions";
import useCoverLetterData from "../hooks/useCoverLetterData";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Edit3 } from "lucide-react";

export default function CoverLetterDashboard({ resumeData, theme, secondaryColor, template, setProgress }) {
  const { data, updateField, progress } = useCoverLetterData();
  const [finalStep, setFinalStep] = useState(false);

  useEffect(() => {
    if (setProgress) setProgress(progress);
  }, [progress, setProgress]);

  // Helper to create gradient between primary and secondary color
  const gradient = (opacity1 = "ff", opacity2 = "cc") => `linear-gradient(to right, ${theme}${opacity1}, ${secondaryColor}${opacity2})`;
  const gradientVertical = (opacity1 = "ff", opacity2 = "cc") => `linear-gradient(to bottom, ${theme}${opacity1}, ${secondaryColor}${opacity2})`;
  const toHexAlpha = (opacity) => {
    const hex = Math.round(opacity * 255).toString(16);
    return hex.padStart(2, "0");
  };
  const gradient1 = (opacity1 = 0.08, opacity2 = 0.12) =>
    `linear-gradient(to right, ${theme}${toHexAlpha(opacity1)}, ${secondaryColor}${toHexAlpha(opacity2)})`;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a001a]" style={{ background: gradient1() }}>
      <div id="no-print">
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {!finalStep ? (
              <motion.div
                key="builder"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col xl:flex-row gap-8 w-full h-[calc(100vh-120px)]"
              >
                {/* Form Side */}
                <aside className="w-full xl:w-1/2 h-full flex flex-col">
                  <div className="bg-[#edf5ffe6] dark:bg-[#24115D] backdrop-blur-md rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30 dark:border-gray-700 p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-6 rounded-full" style={{ background: gradientVertical() }}></div>
                      <div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: gradient() }}>
                          Build Your Cover Letter
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Fill in the details for your target position</p>
                      </div>
                    </div>

                    <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                      <CoverLetterForm data={data} resumeData={resumeData} updateField={updateField} />
                    </div>

                    <div className="flex gap-3 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setFinalStep(true)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
                        style={{ background: gradient() }}
                      >
                        <Eye className="w-4 h-4" />
                        Final Preview & Export
                      </button>
                    </div>
                  </div>
                </aside>

                {/* Preview Side */}
                <section className="w-full xl:w-1/2 h-full flex flex-col">
                  <div className="bg-[#edf5ffe6] dark:bg-[#24115D] backdrop-blur-md rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30 dark:border-gray-700 p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-6 rounded-full" style={{ background: gradientVertical("ff", "99") }}></div>
                      <div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: gradient("ff", "99") }}>
                          Live Preview
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">See your cover letter as you build it</p>
                      </div>
                    </div>

                    <div className="overflow-y-auto flex-1 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white shadow-inner min-h-[300px] flex flex-col items-center justify-start custom-scrollbar">
                      <div className="text-gray-900 dark:text-white w-full">
                        <CoverLetterPreview data={data} resumeData={resumeData} theme={theme} secondaryColor={secondaryColor} template={template} />
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            ) : (
              // Final Preview
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl mx-auto"
              >
                <div className="bg-white/80 dark:bg-[#1a0a3a] backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-white-700 p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: gradient() }}>
                        Final Cover Letter
                      </h2>
                      <p className="text-gray-600 dark:text-[#C7B7FF] mt-2">Review and download your professional cover letter</p>
                    </div>

                    <button
                      onClick={() => setFinalStep(false)}
                      className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#37247d] border border-gray-200 dark:border-white-700 hover:bg-gray-50 dark:hover:bg-[#2a1a4a] rounded-xl transition-all duration-200 font-medium text-gray-900 dark:text-white"
                    >
                      <Edit3 className="w-4 h-4" />
                      Back to Editor
                    </button>
                  </div>

                  <div className="mb-8 flex justify-center bg-white p-8 rounded-xl border-2 border-dashed rounded-2xl border-gray-200 dark:border-gray-700 shadow-sm w-full">
                    <div className="text-gray-900 dark:text-white w-full">
                      <CoverLetterPreview data={data} resumeData={resumeData} theme={theme} secondaryColor={secondaryColor} template={template} />
                    </div>
                  </div>

                  <CoverLetterActions data={data} resumeData={resumeData} onEdit={() => setFinalStep(false)} onPrint={() => window.print()} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(100,100,100,0.4);
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
}
