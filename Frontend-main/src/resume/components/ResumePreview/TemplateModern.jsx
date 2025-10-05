import React from "react";

export default function TemplateModern({ data, theme }) {
  return (
    <div id="resume-template" className="p-6 bg-white shadow-md" style={{ minWidth: 420 }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold" style={{ color: theme }}>{data.fullName || "Your Name"}</h1>
          <div className="text-sm text-gray-600">{data.role}</div>
        </div>
        <div className="text-right text-xs text-gray-600">
          {data.email && <div>{data.email}</div>}
          {data.phone && <div>{data.phone}</div>}
          {data.location && <div>{data.location}</div>}
          
          {/* Social Links Section */}
          {(data.linkedin || data.github || data.portfolio) && (
            <div className="mt-1 flex flex-wrap justify-end gap-2">
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
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {data.summary && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Summary</h4>
              <p className="text-sm text-gray-600">{data.summary}</p>
            </div>
          )}

          {data.experience && data.experience.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Experience</h4>
              <div className="space-y-3">
                {data.experience.map((e, i) => (
                  <div key={i}>
                    <div className="flex justify-between">
                      <div className="font-semibold text-sm" style={{ color: theme }}>{e.role}</div>
                      <div className="text-xs text-gray-500">{e.start} - {e.end}</div>
                    </div>
                    <div className="text-sm text-gray-600">{e.company}</div>
                    {e.description && <div className="text-sm text-gray-600 mt-1">{e.description}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.projects && data.projects.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Projects</h4>
              <div className="space-y-3">
                {data.projects.map((p, i) => (
                  <div key={i}>
                    <div className="font-semibold text-sm" style={{ color: theme }}>{p.name}</div>
                    {p.technologies && <div className="text-xs text-gray-500">{p.technologies}</div>}
                    {p.description && <div className="text-sm text-gray-600 mt-1">{p.description}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside>
          {data.education && data.education.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Education</h4>
              <div className="space-y-2">
                {data.education.map((ed, i) => (
                  <div key={i} className="text-sm">
                    <div className="font-medium" style={{ color: theme }}>{ed.degree}</div>
                    <div className="text-gray-600">{ed.institution}</div>
                    <div className="text-xs text-gray-500">{ed.start} - {ed.end}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.skills && data.skills.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Skills</h4>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((s, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: theme + '20', color: theme }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.languages && data.languages.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Languages</h4>
              <div className="space-y-1">
                {data.languages.map((lang, i) => (
                  <div key={i} className="text-sm text-gray-600">
                    {lang.name} {lang.level && <span className="text-xs">({lang.level})</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.certificates && data.certificates.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Certificates</h4>
              <div className="space-y-1">
                {data.certificates.map((cert, i) => (
                  <div key={i} className="text-sm text-gray-600">
                    {cert.name} ({cert.year})
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.interests && data.interests.length > 0 && (
            <div>
              <h4 className="font-semibold text-sm mb-2" style={{ color: theme }}>Interests</h4>
              <div className="text-sm text-gray-600">
                {data.interests.join(', ')}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}