import React from "react";
import TemplateClassic from "./TemplateClassic";
import TemplateModern from "./TemplateModern";
import TemplateCreative from "./TemplateCreative";

export default function ResumePreview({ data = {}, template = "classic", theme = "#3B82F6" }) {
  // Provide default empty data structure if data is undefined
  const safeData = data || {};
  
  const sharedProps = { 
    data: {
      fullName: safeData.fullName || "",
      role: safeData.role || "",
      email: safeData.email || "",
      phone: safeData.phone || "",
      location: safeData.location || "",
      linkedin: safeData.linkedin || "",
      github: safeData.github || "",
      portfolio: safeData.portfolio || "",
      summary: safeData.summary || "",
      experience: safeData.experience || [],
      education: safeData.education || [],
      projects: safeData.projects || [],
      skills: safeData.skills || [],
      interests: safeData.interests || [],
      certificates: safeData.certificates || [],
      languages: safeData.languages || []
    }, 
    theme 
  };

  return (
    <div className="resume-preview-scroll p-3">
      {template === "classic" && <TemplateClassic {...sharedProps} />}
      {template === "modern" && <TemplateModern {...sharedProps} />}
      {template === "creative" && <TemplateCreative {...sharedProps} />}
    </div>
  );
}