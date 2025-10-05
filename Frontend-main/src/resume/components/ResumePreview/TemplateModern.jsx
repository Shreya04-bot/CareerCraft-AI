import React from "react";

export default function TemplateMinimal({ data, theme }) {
  return (
    <div
      id="resume-template"
      className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
      style={{ minWidth: 420 }}
    >
      {/* Hero/Header */}
      <div
        className="relative py-14 px-8 text-center text-white"
        style={{
          background: `linear-gradient(135deg, ${theme} 0%, ${theme}cc 50%, ${theme}99 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight drop-shadow-sm">
            {data.fullName || "Your Name"}
          </h1>
          <p className="text-xl font-medium opacity-90 mb-6">
            {data.role || "Software Developer"}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {data.email && (
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                📧 {data.email}
              </div>
            )}
            {data.phone && (
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                📱 {data.phone}
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                📍 {data.location}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-10 text-gray-800">
        {/* Summary */}
        {data.summary && (
          <Section title="Summary" theme={theme}>
            <p className="text-justify">{data.summary}</p>
          </Section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <Section title="Work Experience" theme={theme}>
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-semibold">
                  <span>{exp.role} @ {exp.company}</span>
                  <span className="text-gray-500">{exp.start} - {exp.end}</span>
                </div>
                {exp.description && <p className="text-sm text-gray-700 mt-1">{exp.description}</p>}
              </div>
            ))}
          </Section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <Section title="Education" theme={theme}>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-semibold">
                  <span>{edu.degree}, {edu.institution}</span>
                  <span className="text-gray-500">{edu.start} - {edu.end}</span>
                </div>
                {edu.details && <p className="text-sm text-gray-700 mt-1">{edu.details}</p>}
              </div>
            ))}
          </Section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <Section title="Skills" theme={theme}>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm border rounded"
                  style={{ borderColor: theme }}
                >
                  {s.name} {s.level ? `(${s.level})` : ""}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <Section title="Projects" theme={theme}>
            {data.projects.map((p, i) => (
              <div key={i} className="mb-4">
                <div className="font-semibold">{p.name}</div>
                {p.technologies && <div className="text-sm text-gray-600 mb-1">{p.technologies}</div>}
                {p.description && <p className="text-sm">{p.description}</p>}
              </div>
            ))}
          </Section>
        )}

        {/* Additional Info */}
        {(data.certificates?.length > 0 || data.languages?.length > 0 || data.interests?.length > 0) && (
          <Section title="Additional Information" theme={theme}>
            {data.certificates?.length > 0 && (
              <div className="mb-3">
                <strong>Certificates:</strong> {data.certificates.map(c => c.name).join(", ")}
              </div>
            )}
            {data.languages?.length > 0 && (
              <div className="mb-3">
                <strong>Languages:</strong> {data.languages.map(l => `${l.name} (${l.level || ""})`).join(", ")}
              </div>
            )}
            {data.interests?.length > 0 && (
              <div className="mb-3">
                <strong>Interests:</strong> {data.interests.join(", ")}
              </div>
            )}
          </Section>
        )}
      </div>

      {/* Footer */}
      <div className="py-4 text-center text-white text-sm" style={{ backgroundColor: theme }}>
        References available upon request
      </div>
    </div>
  );
}

/* Helper Component */
function Section({ title, children, theme }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3" style={{ color: theme }}>{title}</h2>
      <div>{children}</div>
      <hr className="my-4 border-gray-300" />
    </div>
  );
}
