import React, { useState } from "react";
import CoverLetterFormSection from "./CoverLetterFormActions";
import { TextField } from "../ResumeForm/FormFields";
import AIOptionsDisplay from "../../../components/AIOptionsDisplay";
import { generateCoverLetter } from "../../../api"; // API call to backend
import { BriefcaseBusiness, Flame, IdCard, Mail, Target } from "lucide-react";

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
        companyAddress: data.companyAddress,
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
      <CoverLetterFormSection 
        title={
          <span className="flex items-center gap-2">
            <IdCard className="w-5 h-5 text-primary" />
            Personal Info
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
            <TextField
              label="Full Name *"
              value={data.fullName || ""}
              onChange={(v) => updateField("fullName", v)}
              placeholder={resumeData.fullName || "John Doe"}
              className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            />
            <TextField
              label="Professional Role *"
              value={data.role || ""}
              onChange={(v) => updateField("role", v)}
              placeholder={resumeData.role || "Software Engineer"}
              className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            />
            <TextField
              label="Email *"
              value={data.email || ""}
              onChange={(v) => updateField("email", v)}
              placeholder={resumeData.email || "john@example.com"}
              className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Phone"
                value={data.phone || ""}
                onChange={(v) => updateField("phone", v)}
                placeholder={resumeData.phone || "+1 (555) 123-4567"}
                className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
              />
              <TextField
                label="Location"
                value={data.location || ""}
                onChange={(v) => updateField("location", v)}
                placeholder={resumeData.location || "New York, NY"}
                className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
              />
            </div>
         </div>
      </CoverLetterFormSection>

      {/* Company & Role Info */}
      <CoverLetterFormSection 
        title={
          <span className="flex items-center gap-2">
            <BriefcaseBusiness className="w-5 h-5 text-primary" />
            Company & Position Details
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Company Name *"
              value={data.companyName}
              onChange={(v) => updateField("companyName", v)}
              placeholder="Google, Microsoft, etc."
              className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            />
            <TextField
              label="Hiring Manager (Optional)"
              value={data.hiringManager}
              onChange={(v) => updateField("hiringManager", v)}
              placeholder="John Smith"
              className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>
          <TextField
            label="Company Address (Optional)"
            value={data.companyAddress || ""}
            onChange={(v) => updateField("companyAddress", v)}
            placeholder="123 Main St, City, State, ZIP"
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
          <TextField
            label="Job Title *"
            value={data.jobTitle}
            onChange={(v) => updateField("jobTitle", v)}
            placeholder="Data Analyst, Product Manager, etc."
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
          <TextField
            label="Job Description / Key Requirements"
            value={data.jobDescription}
            onChange={(v) => updateField("jobDescription", v)}
            rows={3}
            placeholder="Mention key points from job description or requirements..."
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
      </div>
      </CoverLetterFormSection>

      {/* Motivation */}
      <CoverLetterFormSection 
        title={
          <span className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Why This Company
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <TextField
            label="What excites you about this company?"
            value={data.motivation || ""}
            onChange={(v) => updateField("motivation", v)}
            rows={3}
            placeholder="Describe why you are interested in this company or role..."
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
        </div>
      </CoverLetterFormSection>

      {/* Key Strengths */}
      <CoverLetterFormSection 
        title={
          <span className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary" />
            Key Strengths
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <TextField
            label="Mention key skills or achievements to emphasize"
            value={data.keyStrengths || ""}
            onChange={(v) => updateField("keyStrengths", v)}
            rows={3}
            placeholder="E.g., strong problem-solving skills, 3+ academic projects, leadership experience..."
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
        </div>
      </CoverLetterFormSection>

      {/* AI Cover Letter Section */}
      <CoverLetterFormSection 
        title={
          <span className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Cover Letter Content
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <TextField
            label="Custom Content (Optional)"
            value={data.customContent}
            onChange={(v) => updateField("customContent", v)}
            rows={8}
            placeholder="Write your custom cover letter content here. If left empty, AI will generate one using your details."
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
          <button
            type="button"
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition duration-200"
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
        </div>
      </CoverLetterFormSection>
    </form>
  );
}
