import React from "react";

export default function TemplateCreative({ data, theme }) {
  return (
    <div
      className="flex border rounded overflow-hidden shadow-md"
      id="resume-template"
      style={{ minWidth: 420, background: "white", height: "100%" }}
    >
      {/* Left colored strip */}
      <div
  className="w-2"
  style={{
    backgroundColor: theme,
    height: '100%',
    display: 'inline-block',
  }}
>
  &nbsp;
</div>


      {/* Main content */}
      <div className="p-6 flex-1">
        {/* Header */}
        <header className="text-center mb-4">
          <h1 className="text-2xl font-bold" style={{ color: theme }}>
            {data.fullName || "Your Name"}
          </h1>
          <p className="text-sm text-gray-600">{data.role}</p>

          {/* Contact info */}
          <div className="text-xs text-gray-500 mt-1 flex flex-wrap justify-center gap-2">
            {data.email && <span>{data.email}</span>}
            {data.phone && <span>{data.phone}</span>}
            {data.location && <span>{data.location}</span>}
          </div>

          {/* Social links */}
          <div className="text-xs text-gray-500 mt-1 flex flex-wrap justify-center gap-2">
            {data.linkedin && (
              <a
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: theme }}
              >
                LinkedIn
              </a>
            )}
            {data.github && (
              <a
                href={`https://${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: theme }}
              >
                GitHub
              </a>
            )}
            {data.portfolio && (
              <a
                href={`https://${data.portfolio}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: theme }}
              >
                Portfolio
              </a>
            )}
          </div>
        </header>

        {/* Summary */}
        {data.summary && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Summary
            </h4>
            <p className="text-sm text-gray-600 mt-2">{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Experience
            </h4>
            <div className="space-y-2 mt-2">
              {data.experience.map((e, i) => (
                (e.role || e.company) && (
                  <div key={i}>
                    <div className="flex justify-between">
                      <div className="font-medium" style={{ color: theme }}>{e.role}</div>
                      <div className="text-xs text-gray-500">{e.start} - {e.end}</div>
                    </div>
                    <div className="text-sm text-gray-600">{e.company}</div>
                    {e.description && <div className="text-sm text-gray-600 mt-1">{e.description}</div>}
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Education
            </h4>
            <div className="space-y-2 mt-2">
              {data.education.map((ed, i) => (
                (ed.degree || ed.institution) && (
                  <div key={i}>
                    <div className="flex justify-between">
                      <div className="font-medium" style={{ color: theme }}>{ed.degree}</div>
                      <div className="text-xs text-gray-500">{ed.start} - {ed.end}</div>
                    </div>
                    <div className="text-sm text-gray-600">{ed.institution}</div>
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Projects
            </h4>
            <div className="space-y-2 mt-2 text-sm text-gray-600">
              {data.projects.map((p, i) => (
                p.name && (
                  <div key={i}>
                    <div className="font-medium" style={{ color: theme }}>{p.name}</div>
                    {p.technologies && <div className="text-xs text-gray-500">{p.technologies}</div>}
                    {p.description && <div className="text-sm mt-1">{p.description}</div>}
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Skills
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.skills.map((s, i) => (
                s.name && (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded"
                    style={{ backgroundColor: theme + '20', color: theme }}
                  >
                    {s.name}{s.level ? ` (${s.level})` : ''}
                  </span>
                )
              ))}
            </div>
          </section>
        )}

        {/* Certificates */}
        {data.certificates?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Certificates
            </h4>
            <div className="space-y-1 mt-2 text-sm text-gray-600">
              {data.certificates.map((c, i) => (
                <div key={i}>{c.name} ({c.year})</div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {data.languages?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Languages
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.languages.map((lang, i) => (
                <span key={i} className="text-xs text-gray-600">
                  {lang.name}{lang.level ? ` (${lang.level})` : ''}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Interests */}
        {data.interests?.length > 0 && (
          <section className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>
              Interests
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.interests.map((interest, i) => (
                <span key={i} className="text-xs text-gray-600">{interest}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
