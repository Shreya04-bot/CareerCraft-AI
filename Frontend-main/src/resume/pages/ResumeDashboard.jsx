import React, { useState, useEffect } from "react";
import ResumeForm from "../components/ResumeForm/ResumeForm";
import ResumePreview from "../components/ResumePreview/ResumePreview";
import FinalActions from "../components/FinalActions";
import useResumeData from "../hooks/useResumeData";
import { TEMPLATES } from "../utils/templates";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Edit3 } from "lucide-react";

export default function ResumeDashboard({ theme, secondaryColor, template, setData, setProgress }) {
  const { data: resumeData, updateField, updateArrayField, addItem, removeItem, progress } = useResumeData();
  const [finalStep, setFinalStep] = useState(false);

  const gradient = (opacity1 = "ff", opacity2 = "cc") => `linear-gradient(to right, ${theme}${opacity1}, ${secondaryColor}${opacity2})`;
  const gradientVertical = (opacity1 = "ff", opacity2 = "cc") => `linear-gradient(to bottom, ${theme}${opacity1}, ${secondaryColor}${opacity2})`;

const toHexAlpha = (opacity) => {
  const hex = Math.round(opacity * 255).toString(16);
  return hex.padStart(2, "0");
};

// Updated gradient functions
const gradient1 = (opacity1 = 0.08, opacity2 = 0.12) =>
  `linear-gradient(to right, ${theme}${toHexAlpha(opacity1)}, ${secondaryColor}${toHexAlpha(opacity2)})`;

  useEffect(() => {
    if (setProgress) setProgress(progress);
  }, [progress, setProgress]);

  useEffect(() => {
    if (setData) setData(resumeData);
  }, [resumeData, setData]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: gradient1()}}>
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
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-6 rounded-full" style={{ background: gradientVertical() }}></div>
                      <div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: gradient() }}>
                          Build Your Resume
                        </h2>
                        <p className="text-sm text-gray-600">Fill in your details - see live updates</p>
                      </div>
                    </div>

                    {/* Scrollable Form */}
                    <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                      <ResumeForm
                        data={resumeData}
                        updateField={updateField}
                        updateArrayField={updateArrayField}
                        addItem={addItem}
                        removeItem={removeItem}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-gray-200">
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
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-6 rounded-full" style={{ background: gradientVertical("ff", "99") }}></div>
                      <div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: gradient("ff", "99") }}>
                          Live Preview
                        </h2>
                        <div className="text-sm text-gray-600 flex gap-2">
                          <span>Template: <strong>{TEMPLATES.find(t => t.id === template)?.label}</strong></span>
                          <span>•</span>
                          <span>Theme: <strong className="capitalize" style={{ color: theme }}>Custom</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Preview */}
                    <div className="overflow-auto flex-1 border-2 border-dashed border-gray-300 rounded-2xl p-4 bg-white shadow-inner min-h-[300px] custom-scrollbar">
                      <div className="w-full max-w-full overflow-auto">
                        <ResumePreview data={resumeData} template={template} theme={theme} />
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            ) : (
              /* Final Preview Page */
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl mx-auto"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 flex flex-col">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8" >
                    <div>
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: gradient() }}>
                        Final Resume Preview
                      </h2>
                      <p className="text-gray-600 mt-2">Review and download your professional resume</p>
                    </div>

                    <button
                      onClick={() => setFinalStep(false)}
                      className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
                    >
                      <Edit3 className="w-4 h-4" />
                      Back to Editor
                    </button>
                  </div>

                  {/* Scrollable final preview */}
                  <div className="overflow-auto w-full max-w-full border-2 border-dashed border-gray-300 rounded-2xl p-4 bg-white shadow-inner custom-scrollbar mb-8">
                    <div className="w-full max-w-full overflow-auto">
                      <ResumePreview data={resumeData} template={template} theme={theme} />
                    </div>
                  </div>

                  <FinalActions data={resumeData} onEdit={() => setFinalStep(false)} />
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
