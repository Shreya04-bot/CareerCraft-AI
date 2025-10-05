import { useMemo, useState } from "react";

const initialData = {
  fullName: "",
  role: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  portfolio: "",
  summary: "",
  education: [{ degree: "", institution: "", start: "", end: "", details: "" }],
  experience: [{ role: "", company: "", start: "", end: "", description: "" }],
  skills: [{ name: "", level: "" }],
  projects: [{ name: "", description: "", technologies: "" }],
  languages: [{ name: "", level: "" }],
  interests: [],
  references: [{ name: "", contact: "", relation: "" }],
  certificates: [{ name: "", issuer: "", year: "" }],
  workshops: [{ name: "", description: "", year: "" }],
};

export default function useResumeData(initial = initialData) {
  const [data, setData] = useState(initial);

  const updateField = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const updateArrayField = (key, index, field, value) => {
    setData((prev) => {
      const arr = Array.isArray(prev[key]) ? [...prev[key]] : [];
      arr[index] = { ...(arr[index] || {}), [field]: value };
      return { ...prev, [key]: arr };
    });
  };

  const addItem = (key, newItem) => {
    setData((prev) => ({ ...prev, [key]: [...(prev[key] || []), newItem] }));
  };

  const removeItem = (key, index) => {
    setData((prev) => ({ ...prev, [key]: prev[key].filter((_, i) => i !== index) }));
  };

  const reset = () => setData(initial);

  const progress = useMemo(() => {
    // Count required top-level fields and simple completion heuristics
    const keys = [
      "fullName",
      "role",
      "email",
      "phone",
      "summary",
      "education",
      "experience",
      "skills",
      "projects",
    ];
    let total = keys.length;
    let filled = 0;

    keys.forEach((k) => {
      const val = data[k];
      if (Array.isArray(val)) {
        const hasContent = val.some((item) => Object.values(item || {}).some(Boolean));
        if (hasContent) filled++;
      } else if (val && String(val).trim().length) filled++;
    });

    return Math.round((filled / total) * 100);
  }, [data]);

  return {
    data,
    setData,
    updateField,
    updateArrayField,
    addItem,
    removeItem,
    reset,
    progress,
  };
}
