// txtExporter.js - Plain JavaScript only (no JSX)

export function exportToTXT(data, fileName = "resume.txt") {
  if (!data) return;
  let lines = [];

  lines.push("RESUME");
  lines.push("=".repeat(50));
  lines.push("");

  const add = (label, value) => {
    if (!value) return;
    lines.push(`${label}: ${value}`);
  };

  add("Full Name", data.fullName);
  add("Role", data.role);
  add("Email", data.email);
  add("Phone", data.phone);
  add("Location", data.location);
  add("LinkedIn", data.linkedin);
  add("GitHub", data.github);
  add("Portfolio", data.portfolio);
  lines.push("");

  if (data.summary) {
    lines.push("Summary:");
    lines.push(data.summary);
    lines.push("");
  }

  if (Array.isArray(data.experience) && data.experience.length) {
    lines.push("Work Experience:");
    data.experience.forEach((e) => {
      lines.push(`- ${e.role || e.title} @ ${e.company || ""} (${e.start || ""} - ${e.end || ""})`);
      if (e.description) lines.push(`  ${e.description}`);
    });
    lines.push("");
  }

  if (Array.isArray(data.education) && data.education.length) {
    lines.push("Education:");
    data.education.forEach((ed) => {
      lines.push(`- ${ed.degree} @ ${ed.institution} (${ed.start || ""} - ${ed.end || ""})`);
      if (ed.details) lines.push(`  ${ed.details}`);
    });
    lines.push("");
  }

  if (Array.isArray(data.projects) && data.projects.length) {
    lines.push("Projects:");
    data.projects.forEach((p) => {
      lines.push(`- ${p.name}`);
      if (p.technologies) lines.push(`  Tech: ${p.technologies}`);
      if (p.description) lines.push(`  ${p.description}`);
    });
    lines.push("");
  }

  if (Array.isArray(data.skills) && data.skills.length) {
    lines.push("Skills:");
    lines.push(data.skills.map((s) => `${s.name}${s.level ? " (" + s.level + ")" : ""}`).join(", "));
    lines.push("");
  }

  if (Array.isArray(data.interests) && data.interests.length) {
    lines.push("Interests: " + data.interests.join(", "));
    lines.push("");
  }

  if (Array.isArray(data.certificates) && data.certificates.length) {
    lines.push("Certificates:");
    data.certificates.forEach((cert) => {
      lines.push(`- ${cert.name} (${cert.issuer || ""}) ${cert.year ? `- ${cert.year}` : ""}`);
    });
    lines.push("");
  }

  if (Array.isArray(data.languages) && data.languages.length) {
    lines.push("Languages:");
    lines.push(data.languages.map((lang) => `${lang.name}${lang.level ? ` (${lang.level})` : ""}`).join(", "));
    lines.push("");
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

export function exportCoverLetterToTXT(coverLetterData, resumeData, fileName = "cover-letter.txt") {
  if (!coverLetterData || !resumeData) return;

  let lines = [];
  lines.push("COVER LETTER");
  lines.push("=".repeat(50));
  lines.push("");

  // If custom content is NOT complete, add personal info, recipient info, salutation, closing
  if (!coverLetterData.customComplete) {
    // Personal Info
    lines.push(coverLetterData.fullName || "Your Name");
    if (coverLetterData.location) lines.push(coverLetterData.location);
    if (coverLetterData.email) lines.push(coverLetterData.email);
    if (coverLetterData.phone) lines.push(coverLetterData.phone);
    lines.push(""); // blank line
    lines.push(coverLetterData.date || new Date().toLocaleDateString());
    lines.push(""); // blank line

    // Recipient info
    if (coverLetterData.hiringManager) lines.push(coverLetterData.hiringManager);
    if (coverLetterData.companyName) lines.push(coverLetterData.companyName);
    if (coverLetterData.companyName) lines.push("[Company Address]");
    lines.push(""); // blank line

    // Salutation
    lines.push(coverLetterData.hiringManager ? `Dear ${coverLetterData.hiringManager},` : "Dear Hiring Manager,");
    lines.push(""); // blank line
  }

  // Content (always include)
  const content = coverLetterData.customContent ||
    `I am writing to express my interest in the ${coverLetterData.jobTitle || "the position"} at ${coverLetterData.companyName || "your company"}.${coverLetterData.jobDescription ? ` I was particularly impressed by your requirement for ${coverLetterData.jobDescription}.` : ''
    }

    With my background in ${coverLetterData.role || "my field"} and proven track record of success, I am confident that I possess the skills and experience necessary to excel in this role.

    Thank you for considering my application. I look forward to the opportunity to discuss how my qualifications align with your needs.`;

  content.split("\n\n").forEach((paragraph) => {
    lines.push(paragraph);
    lines.push(""); // blank line between paragraphs
  });

  // Closing (only if custom content is not complete)
  if (!coverLetterData.customComplete) {
    lines.push("Sincerely,");
    lines.push(coverLetterData.fullName || "Your Name");
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

// Universal exporter
export function exportToTXTUniversal(data, resumeData = null, fileName = "document.txt") {
  if (resumeData && (data.companyName || data.jobTitle || data.customContent)) {
    exportCoverLetterToTXT(data, resumeData, fileName);
  } else {
    exportToTXT(data, fileName);
  }
}
