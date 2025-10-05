import React from "react";

export default function TemplateClassic({ data, theme }) {
  return (
    <div
      className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden"
      id="resume-template"
      style={{ minWidth: 420, maxWidth: 800, margin: "0 auto" }}
    >
      {/* Header Section */}
      <header
        className="px-8 py-6 text-center border-b-2"
        style={{ borderColor: theme, backgroundColor: theme + "08" }}
      >
        <h1
          className="text-3xl font-bold mb-2 tracking-tight"
          style={{ color: theme }}
        >
          {data.fullName || "Your Name"}
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-3">{data.role}</p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-3">
          {data.email && (
            <div className="flex items-center gap-1">
              <span>📧</span>
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center gap-1">
              <span>📱</span>
              <span>{data.phone}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>{data.location}</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {data.linkedin && (
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline font-medium"
              style={{ color: theme }}
            >
              <span>💼</span>
              LinkedIn
            </a>
          )}
          {data.github && (
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline font-medium"
              style={{ color: theme }}
            >
              <span>⚡</span>
              GitHub
            </a>
          )}
          {data.portfolio && (
            <a
              href={`https://${data.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline font-medium"
              style={{ color: theme }}
            >
              <span>🌐</span>
              Portfolio
            </a>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 py-6 space-y-8">
        {/* Summary */}
        {data.summary && (
          <section>
            <h4
              className="font-bold text-lg mb-3 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
              style={{ borderColor: theme }}
            >
              Summary
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify">
              {data.summary}
            </p>
          </section>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-10">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <section>
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Experience
                </h4>
                <div className="space-y-5">
                  {data.experience.map((e, i) => (
                    <div
                      key={i}
                      className="border-l-4 pl-4"
                      style={{ borderColor: theme + "40" }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <div
                          className="font-bold text-gray-800"
                          style={{ color: theme }}
                        >
                          {e.role}
                        </div>
                        <div className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {e.start} - {e.end}
                        </div>
                      </div>
                      <div className="font-medium text-gray-700 mb-2">
                        {e.company}
                      </div>
                      {e.description && (
                        <div className="text-gray-600 leading-relaxed text-justify">
                          {e.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.projects && data.projects.length > 0 && (
              <section>
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Projects
                </h4>
                <div className="space-y-4">
                  {data.projects.map((p, i) => (
                    <div
                      key={i}
                      className="border-l-4 pl-4"
                      style={{ borderColor: theme + "40" }}
                    >
                      <div
                        className="font-bold text-gray-800 mb-1"
                        style={{ color: theme }}
                      >
                        {p.name}
                      </div>
                      {p.technologies && (
                        <div className="text-sm text-gray-500 font-medium mb-2">
                          {p.technologies}
                        </div>
                      )}
                      {p.description && (
                        <div className="text-gray-600 leading-relaxed text-justify">
                          {p.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8 text-[0.95rem] leading-relaxed">
            {/* Education */}
            {data.education && data.education.length > 0 && (
              <section className="pb-4 border-b border-gray-200 last:border-none">
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Education
                </h4>
                <div className="space-y-4">
                  {data.education.map((ed, i) => (
                    <div
                      key={i}
                      className="border-l-4 pl-4"
                      style={{ borderColor: theme + "40" }}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div
                          className="font-bold text-gray-800"
                          style={{ color: theme }}
                        >
                          {ed.degree}
                        </div>
                        <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {ed.start} - {ed.end}
                        </div>
                      </div>
                      <div className="font-medium text-gray-700 mb-1">
                        {ed.institution}
                      </div>
                      {ed.details && (
                        <div className="text-sm text-gray-600 leading-relaxed">
                          {ed.details}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section className="pb-4 border-b border-gray-200 last:border-none">
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-lg text-sm font-medium shadow-sm border"
                      style={{
                        backgroundColor: theme + "15",
                        color: theme,
                        borderColor: theme + "30",
                      }}
                    >
                      {s.name}
                      {s.level ? ` • ${s.level}` : ""}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Certificates */}
            {data.certificates && data.certificates.length > 0 && (
              <section className="pb-4 border-b border-gray-200 last:border-none">
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Certificates
                </h4>
                <div className="space-y-3">
                  {data.certificates.map((cert, i) => (
                    <div
                      key={i}
                      className="text-gray-700 border-l-4 pl-4"
                      style={{ borderColor: theme + "40" }}
                    >
                      <div className="font-medium text-gray-800">
                        {cert.name}
                      </div>
                      <div className="text-sm text-gray-600">{cert.issuer}</div>
                      <div className="text-xs text-gray-500 font-medium">
                        {cert.year}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {data.languages && data.languages.length > 0 && (
              <section className="pb-4 border-b border-gray-200 last:border-none">
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Languages
                </h4>
                <div className="space-y-2">
                  {data.languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        {lang.name}
                      </span>
                      {lang.level && (
                        <span
                          className="text-xs px-2 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: theme + "20",
                            color: theme,
                          }}
                        >
                          {lang.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interests */}
            {data.interests && data.interests.length > 0 && (
              <section>
                <h4
                  className="font-bold text-lg mb-4 pb-2 border-b-2 tracking-wide uppercase text-gray-800"
                  style={{ borderColor: theme }}
                >
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
