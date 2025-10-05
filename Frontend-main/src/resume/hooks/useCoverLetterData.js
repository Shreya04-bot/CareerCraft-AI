import { useMemo, useState } from "react";

const initialData = {
  // Personal Info
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  portfolio: "",
  github: "",
  role: "",

  // Company & Position
  companyName: "",
  hiringManager: "",
  jobTitle: "",
  jobDescription: "",

  // AI & Custom Content
  customContent: "",
  
  // Date (editable)
  date: new Date().toISOString().split('T')[0],
};

export default function useCoverLetterData(initial = initialData) {
  const [data, setData] = useState(initial);

  // Update individual field
  const updateField = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  // Reset to initial
  const reset = () => setData(initial);

  // Auto-fill missing AI fields
  const fillDefaults = (aiData = {}) => {
    setData((prev) => ({
      ...prev,
      fullName: prev.fullName || aiData.fullName || "",
      email: prev.email || aiData.email || "",
      phone: prev.phone || aiData.phone || "",
      location: prev.location || aiData.location || "",
      role: prev.role || aiData.role || "",
      companyName: prev.companyName || aiData.companyName || "",
      hiringManager: prev.hiringManager || aiData.hiringManager || "",
      jobTitle: prev.jobTitle || aiData.jobTitle || "",
      jobDescription: prev.jobDescription || aiData.jobDescription || "",
      customContent: prev.customContent || aiData.customContent || "",
      date: prev.date || aiData.date || new Date().toISOString().split('T')[0],
    }));
  };

  // Progress calculation (required fields)
  const progress = useMemo(() => {
    const requiredFields = ["fullName", "email", "companyName", "jobTitle"];
    let filled = requiredFields.reduce(
      (acc, field) => acc + (data[field]?.trim().length > 0 ? 1 : 0),
      0
    );
    return Math.round((filled / requiredFields.length) * 100);
  }, [data]);

  return {
    data,
    setData,
    updateField,
    reset,
    fillDefaults, // call this after AI generation
    progress,
  };
}
