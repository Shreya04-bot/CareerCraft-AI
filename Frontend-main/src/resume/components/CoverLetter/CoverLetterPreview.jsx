import React from "react";
import TemplateClassic from "./TemplateClassic";
import TemplateModern from "./TemplateModern";
import TemplateCreative from "./TemplateCreative";

export default function CoverLetterPreview({
  data = {},
  resumeData = {},
  template = "classic",
  theme = "#3B82F6",
}) {
  const safeData = data || {};
  const safeResumeData = resumeData || {};

  // Combine cover letter + resume info
  const mergedData = {
    fullName: safeData.fullName || safeResumeData.fullName || "",
    role: safeData.role || safeResumeData.role || "",
    email: safeData.email || safeResumeData.email || "",
    phone: safeData.phone || safeResumeData.phone || "",
    location: safeData.location || safeResumeData.location || "",
    companyName: safeData.companyName || "",
    hiringManager: safeData.hiringManager || "",
    jobTitle: safeData.jobTitle || "",
    jobDescription: safeData.jobDescription || "",
    motivation: safeData.motivation || "",
    keyStrengths: safeData.keyStrengths || "",
    customContent: safeData.customContent || "",
    date: safeData.date || new Date().toISOString().split("T")[0],
  };

  const sharedProps = {
    data: mergedData,
    theme,
  };

  return (
    <div className="cover-letter-preview-scroll w-full h-full overflow-auto p-3">
      {template === "classic" && <TemplateClassic {...sharedProps} />}
      {template === "modern" && <TemplateModern {...sharedProps} />}
      {template === "creative" && <TemplateCreative {...sharedProps} />}
    </div>
  );
}
