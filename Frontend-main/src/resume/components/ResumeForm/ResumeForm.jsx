// ResumeForm.jsx
import React, { useState } from "react";
import ResumeFormSection from "../ResumeForm/ResumeFormSection";
import ArrayField from "../ResumeForm/ArrayField";
import { TextField } from "../ResumeForm/FormFields";
import AIOptionsDisplay from "../../../components/AIOptionsDisplay1";
import { generateSummaries } from "../../../api";
import { FileText, IdCard, Briefcase, GraduationCap, Brain, Sparkles, Wrench } from "lucide-react";

export default function ResumeForm({
  data,
  updateField,
  updateArrayField,
  addItem,
  removeItem,
}) {
  const [aiSummaries, setAiSummaries] = useState(null);
  const handleGenerateSummary = async () => {
    try {
      const result = await generateSummaries(data);
      setAiSummaries(result); // JSON with Fresher/Intermediate/Expert
    } catch (err) {
      console.error("Error generating summaries:", err);
    }
  };
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <IdCard className="w-5 h-5 text-primary" />
            Personal Info
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <TextField
            label="Full Name"
            value={data.fullName}
            onChange={(v) => updateField("fullName", v)}
            placeholder="John Doe"
          />
          <TextField
            label="Role"
            value={data.role}
            onChange={(v) => updateField("role", v)}
            placeholder="Software Engineer"
          />
          <TextField
            label="Email"
            value={data.email}
            onChange={(v) => updateField("email", v)}
            placeholder="john@example.com"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Phone"
              value={data.phone}
              onChange={(v) => updateField("phone", v)}
              placeholder="+1 (555) 123-4567"
            />
            <TextField
              label="Location"
              value={data.location}
              onChange={(v) => updateField("location", v)}
              placeholder="New York, NY"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="LinkedIn"
              value={data.linkedin}
              onChange={(v) => updateField("linkedin", v)}
              placeholder="linkedin.com/in/johndoe"
            />
            <TextField
              label="GitHub"
              value={data.github}
              onChange={(v) => updateField("github", v)}
              placeholder="github.com/johndoe"
            />
          </div>

          <TextField
            label="Portfolio"
            value={data.portfolio}
            onChange={(v) => updateField("portfolio", v)}
            placeholder="johndoe.com"
          />
        </div>

      </ResumeFormSection>
      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            Summary
          </span>
        }
      >
        <div className="bg-white p-4 rounded-2xl shadow mb-4">
          <TextField
            label="Professional Summary"
            value={data.summary}
            onChange={(v) => updateField("summary", v)}
            rows={4}
            placeholder="Experienced software engineer with 5+ years in web development..."
          />

          <button
            type="button"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
            onClick={handleGenerateSummary}
          >
            Generate AI Summaries
          </button>
          <AIOptionsDisplay
            options={aiSummaries}
            onSelect={(selected) => updateField("summary", selected)}
          />
        </div>
      </ResumeFormSection>

      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            Work Experience
          </span>
        }
      >
        <div className="bg-white rounded-2xl">
          <ArrayField
            title="Work Experience"
            items={data.experience || []}
            fields={[
              { field: "role", label: "Job Role" },
              { field: "company", label: "Company" },
              { field: "start", label: "Start Date" },
              { field: "end", label: "End Date" },
              { field: "description", label: "Description", rows: 3 },
            ]}
            onChange={(index, field, value) => updateArrayField("experience", index, field, value)}
            onAdd={() =>
              addItem("experience", { role: "", company: "", start: "", end: "", description: "" })
            }
            onRemove={(idx) => removeItem("experience", idx)}
          />
        </div>
      </ResumeFormSection>

      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Education
          </span>
        }
      >
        <div className="bg-white rounded-2xl">
          <ArrayField
            title="Education"
            items={data.education || []}
            fields={[
              { field: "degree", label: "Degree" },
              { field: "institution", label: "Institution" },
              { field: "start", label: "Start Date" },
              { field: "end", label: "End Date" },
              { field: "details", label: "Details", rows: 2 },
            ]}
            onChange={(index, field, value) => updateArrayField("education", index, field, value)}
            onAdd={() =>
              addItem("education", { degree: "", institution: "", start: "", end: "", details: "" })
            }
            onRemove={(idx) => removeItem("education", idx)}
          />
        </div>
      </ResumeFormSection>

      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            Projects
          </span>
        }
      >
        <div className="bg-white rounded-2xl">
          <ArrayField
            title="Projects"
            items={data.projects || []}
            fields={[
              { field: "name", label: "Project Name" },
              { field: "description", label: "Description", rows: 3 },
              { field: "technologies", label: "Technologies" },
            ]}
            onChange={(index, field, value) => updateArrayField("projects", index, field, value)}
            onAdd={() => addItem("projects", { name: "", description: "", technologies: "" })}
            onRemove={(idx) => removeItem("projects", idx)}
          />
        </div>
      </ResumeFormSection>

      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Skills
          </span>
        }
      >
        <div className="bg-white rounded-2xl">
          <ArrayField
            title="Skills"
            items={data.skills || []}
            fields={[
              { field: "name", label: "Skill Name" },
              { field: "level", label: "Proficiency Level" },
            ]}
            onChange={(index, field, value) => updateArrayField("skills", index, field, value)}
            onAdd={() => addItem("skills", { name: "", level: "" })}
            onRemove={(idx) => removeItem("skills", idx)}
          />
        </div>
      </ResumeFormSection>

      <ResumeFormSection
        title={
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Additional Information
          </span>
        }
      >
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 space-y-8">
          {/* Interests Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
              Interests
            </h3>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              (Comma separated)
            </label>
            <input
              value={(data.interests || []).join(", ")}
              onChange={(e) =>
                updateField(
                  "interests",
                  e.target.value.split(",").map((i) => i.trim())
                )
              }
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                 transition-all duration-200 outline-none bg-white/60"
              placeholder="Reading, Traveling, Cooking, Photography"
            />
          </div>

          {/* Certificates Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
              Certificates
            </h3>
            <ArrayField
              title=""
              items={data.certificates || []}
              fields={[
                { field: "name", label: "Certificate Name" },
                { field: "issuer", label: "Issuing Organization" },
                { field: "year", label: "Year Obtained" },
              ]}
              onChange={(index, field, value) =>
                updateArrayField("certificates", index, field, value)
              }
              onAdd={() =>
                addItem("certificates", { name: "", issuer: "", year: "" })
              }
              onRemove={(idx) => removeItem("certificates", idx)}
            />
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
              Languages
            </h3>
            <ArrayField
              title=""
              items={data.languages || []}
              fields={[
                { field: "name", label: "Language" },
                { field: "level", label: "Proficiency Level" },
              ]}
              onChange={(index, field, value) =>
                updateArrayField("languages", index, field, value)
              }
              onAdd={() => addItem("languages", { name: "", level: "" })}
              onRemove={(idx) => removeItem("languages", idx)}
            />
          </div>
        </div>
      </ResumeFormSection>
    </form>
  );
}