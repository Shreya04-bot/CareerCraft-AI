import React, { useState } from "react";
import CoverLetterFormSection from "./CoverLetterFormActions";
import { TextField } from "../ResumeForm/FormFields";
import AIOptionsDisplay from "../../../components/AIOptionsDisplay";
import { generateCoverLetter } from "../../../api"; // API call to backend

export default function CoverLetterForm({ data, resumeData, updateField }) {
  const [aiCoverLetters, setAiCoverLetters] = useState(null);

  const displayData = {
    fullName: data.fullName || resumeData.fullName,
    email: data.email || resumeData.email,
    phone: data.phone || resumeData.phone,
    location: data.location || resumeData.location,
    role: data.role || resumeData.role,
  };

  const handleGenerateSummary = async () => {
    try {
      const result = await generateCoverLetter({
        ...displayData,
        companyName: data.companyName,
        hiringManager: data.hiringManager,
        jobTitle: data.jobTitle,
        jobDescription: data.jobDescription,
        motivation: data.motivation,
        keyStrengths: data.keyStrengths,
      });
      setAiCoverLetters(result);
    } catch (err) {
      console.error("Error generating cover letter:", err);
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Personal Info Section */}
      <CoverLetterFormSection title="👤 Personal Information" initiallyOpen={true}>
        <TextField
          label="Full Name *"
          value={data.fullName || ""}
          onChange={(v) => updateField("fullName", v)}
          placeholder={resumeData.fullName || "John Doe"}
        />
        <TextField
          label="Professional Role *"
          value={data.role || ""}
          onChange={(v) => updateField("role", v)}
          placeholder={resumeData.role || "Software Engineer"}
        />
        <TextField
          label="Email *"
          value={data.email || ""}
          onChange={(v) => updateField("email", v)}
          placeholder={resumeData.email || "john@example.com"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Phone"
            value={data.phone || ""}
            onChange={(v) => updateField("phone", v)}
            placeholder={resumeData.phone || "+1 (555) 123-4567"}
          />
          <TextField
            label="Location"
            value={data.location || ""}
            onChange={(v) => updateField("location", v)}
            placeholder={resumeData.location || "New York, NY"}
          />
        </div>
      </CoverLetterFormSection>

      {/* Company & Role Info */}
      <CoverLetterFormSection title="🏢 Company & Position Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Company Name *"
            value={data.companyName}
            onChange={(v) => updateField("companyName", v)}
            placeholder="Google, Microsoft, etc."
          />
          <TextField
            label="Hiring Manager (Optional)"
            value={data.hiringManager}
            onChange={(v) => updateField("hiringManager", v)}
            placeholder="John Smith"
          />
        </div>
        <TextField
          label="Job Title *"
          value={data.jobTitle}
          onChange={(v) => updateField("jobTitle", v)}
          placeholder="Data Analyst, Product Manager, etc."
        />
        <TextField
          label="Job Description / Key Requirements"
          value={data.jobDescription}
          onChange={(v) => updateField("jobDescription", v)}
          rows={3}
          placeholder="Mention key points from job description or requirements..."
        />
      </CoverLetterFormSection>

      {/* Motivation */}
      <CoverLetterFormSection title="💡 Why This Company">
        <TextField
          label="What excites you about this company?"
          value={data.motivation || ""}
          onChange={(v) => updateField("motivation", v)}
          rows={3}
          placeholder="Describe why you are interested in this company or role..."
        />
      </CoverLetterFormSection>

      {/* Key Strengths */}
      <CoverLetterFormSection title="⭐ Key Strengths / Highlights">
        <TextField
          label="Mention key skills or achievements to emphasize"
          value={data.keyStrengths || ""}
          onChange={(v) => updateField("keyStrengths", v)}
          rows={3}
          placeholder="E.g., strong problem-solving skills, 3+ academic projects, leadership experience..."
        />
      </CoverLetterFormSection>

      {/* AI Cover Letter Section */}
      <CoverLetterFormSection title="📝 Cover Letter Content">
        <TextField
          label="Custom Content (Optional)"
          value={data.customContent}
          onChange={(v) => updateField("customContent", v)}
          rows={8}
          placeholder="Write your custom cover letter content here. If left empty, AI will generate one using your details."
        />
        <button
          type="button"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={handleGenerateSummary}
        >
          Generate AI Cover Letter
        </button>

        {aiCoverLetters && (
          <AIOptionsDisplay
            options={aiCoverLetters}
            onSelect={(selected) => {
              updateField("customContent", selected);  // update the content
              updateField("customComplete", true);     // mark it complete
            }}
          />
        )}

      </CoverLetterFormSection>
    </form>
  );
}
