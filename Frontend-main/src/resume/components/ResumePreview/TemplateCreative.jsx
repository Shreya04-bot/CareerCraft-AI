import React from "react";

export default function TemplateCreative({ data, theme }) {
  return (
    <div
      className="flex rounded-2xl overflow-hidden shadow-xl border print:shadow-none print:border-0 print:rounded-none"
      id="resume-template"
      style={{ 
        minWidth: 420, 
        background: "white", 
        height: "100%",
        fontFamily: "'Inter', 'Segoe UI', sans-serif" 
      }}
    >
      {/* Sidebar - Enhanced colored section */}
      <div
        className="w-1/3 p-6 text-white print:w-1/3 print:float-left print:h-full"
        style={{
          backgroundColor: theme,
          background: `linear-gradient(135deg, ${theme} 0%, ${theme}dd 100%)`,
          printColorAdjust: 'exact',
          WebkitPrintColorAdjust: 'exact'
        }}
      >
        {/* Profile Section in Sidebar */}
        <div className="text-center mb-8 print:mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30 print:w-20 print:h-20">
            <span className="text-2xl font-bold text-white print:text-xl">
              {data.fullName?.charAt(0) || "Y"}
            </span>
          </div>
          <h1 className="text-xl font-bold text-white mb-1 print:text-lg">
            {data.fullName || "Your Name"}
          </h1>
          <p className="text-white/80 text-sm print:text-xs">{data.role}</p>
        </div>

        {/* Contact Info in Sidebar */}
        <div className="space-y-4 mb-8 print:space-y-3 print:mb-6">
          {data.email && (
            <div className="flex items-center gap-2 text-sm print:text-xs">
              <span className="w-5 print:w-4">📧</span>
              <span className="text-white/90 break-all">{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center gap-2 text-sm print:text-xs">
              <span className="w-5 print:w-4">📱</span>
              <span className="text-white/90">{data.phone}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center gap-2 text-sm print:text-xs">
              <span className="w-5 print:w-4">📍</span>
              <span className="text-white/90">{data.location}</span>
            </div>
          )}
        </div>

        {/* Social Links in Sidebar */}
        <div className="space-y-3 mb-8 print:space-y-2 print:mb-6">
          {data.linkedin && (
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors print:text-xs print:no-underline"
            >
              <span className="w-5 print:w-4">💼</span>
              LinkedIn
            </a>
          )}
          {data.github && (
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors print:text-xs print:no-underline"
            >
              <span className="w-5 print:w-4">⚡</span>
              GitHub
            </a>
          )}
          {data.portfolio && (
            <a
              href={`https://${data.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors print:text-xs print:no-underline"
            >
              <span className="w-5 print:w-4">🌐</span>
              Portfolio
            </a>
          )}
        </div>

        {/* Skills in Sidebar */}
        {data.skills?.length > 0 && (
          <div className="mb-8 print:mb-6">
            <h3 className="font-bold text-white mb-3 text-lg border-b border-white/30 pb-1 print:text-base print:mb-2">
              Skills
            </h3>
            <div className="space-y-2 print:space-y-1.5">
              {data.skills.map((s, i) => (
                s.name && (
                  <div key={i} className="text-sm print:text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="text-white/90">{s.name}</span>
                      {s.level && (
                        <span className="text-white/70 text-xs print:text-2xs">{s.level}</span>
                      )}
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 print:h-1.5">
                      <div 
                        className="h-2 rounded-full bg-white/60 transition-all duration-500 print:h-1.5"
                        style={{ 
                          width: s.level === 'Expert' ? '90%' : 
                                 s.level === 'Advanced' ? '75%' : 
                                 s.level === 'Intermediate' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Languages in Sidebar */}
        {data.languages?.length > 0 && (
          <div className="mb-8 print:mb-6">
            <h3 className="font-bold text-white mb-3 text-lg border-b border-white/30 pb-1 print:text-base print:mb-2">
              Languages
            </h3>
            <div className="space-y-2 print:space-y-1.5">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between text-sm print:text-xs">
                  <span className="text-white/90">{lang.name}</span>
                  {lang.level && (
                    <span className="text-white/70">{lang.level}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main content - Enhanced with print support */}
      <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-white print:w-2/3 print:float-right print:bg-white print:p-6">
        {/* Summary */}
        {data.summary && (
          <section className="mb-8 print:mb-6">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-1 h-8 rounded-full print:h-6" style={{ backgroundColor: theme }}></div>
              <h2 className="text-xl font-bold text-gray-800 print:text-lg">About Me</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify print:text-sm">{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section className="mb-8 print:mb-6">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-1 h-8 rounded-full print:h-6" style={{ backgroundColor: theme }}></div>
              <h2 className="text-xl font-bold text-gray-800 print:text-lg">Experience</h2>
            </div>
            <div className="space-y-6 print:space-y-4">
              {data.experience.map((e, i) => (
                (e.role || e.company) && (
                  <div key={i} className="relative pl-6 border-l-2 print:pl-4" style={{ borderColor: theme + '40' }}>
                    <div className="absolute -left-2 top-0 w-3 h-3 rounded-full border-2 border-white shadow print:-left-1.5 print:w-2 print:h-2" style={{ backgroundColor: theme }}></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 print:mb-1">
                      <h3 className="font-bold text-gray-800 text-lg print:text-base" style={{ color: theme }}>{e.role}</h3>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full print:text-xs print:px-2">
                        {e.start} - {e.end}
                      </span>
                    </div>
                    <div className="font-semibold text-gray-700 mb-2 print:text-sm">{e.company}</div>
                    {e.description && (
                      <p className="text-gray-600 leading-relaxed text-justify print:text-sm">{e.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section className="mb-8 print:mb-6">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-1 h-8 rounded-full print:h-6" style={{ backgroundColor: theme }}></div>
              <h2 className="text-xl font-bold text-gray-800 print:text-lg">Education</h2>
            </div>
            <div className="space-y-4 print:space-y-3">
              {data.education.map((ed, i) => (
                (ed.degree || ed.institution) && (
                  <div key={i} className="flex justify-between items-start p-4 rounded-lg bg-white shadow-sm border border-gray-100 print:p-3 print:shadow-none">
                    <div>
                      <h3 className="font-bold text-gray-800 print:text-base" style={{ color: theme }}>{ed.degree}</h3>
                      <p className="text-gray-700 font-medium print:text-sm">{ed.institution}</p>
                      {ed.details && (
                        <p className="text-gray-600 text-sm mt-1 print:text-xs">{ed.details}</p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap print:text-xs print:px-2">
                      {ed.start} - {ed.end}
                    </span>
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <section className="mb-8 print:mb-6">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-1 h-8 rounded-full print:h-6" style={{ backgroundColor: theme }}></div>
              <h2 className="text-xl font-bold text-gray-800 print:text-lg">Projects</h2>
            </div>
            <div className="grid gap-4 print:gap-3">
              {data.projects.map((p, i) => (
                p.name && (
                  <div key={i} className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow print:p-3 print:shadow-none">
                    <h3 className="font-bold text-gray-800 mb-2 print:text-base" style={{ color: theme }}>{p.name}</h3>
                    {p.technologies && (
                      <div className="flex flex-wrap gap-2 mb-3 print:gap-1.5 print:mb-2">
                        {p.technologies.split(',').map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs rounded-full font-medium print:px-2 print:text-2xs"
                            style={{ 
                              backgroundColor: theme + '15', 
                              color: theme 
                            }}
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    {p.description && (
                      <p className="text-gray-600 leading-relaxed print:text-sm">{p.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Certificates & Interests in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 print:grid-cols-2">
          {/* Certificates */}
          {data.certificates?.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4 print:mb-3">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: theme }}></div>
                <h2 className="font-bold text-gray-800 print:text-base">Certificates</h2>
              </div>
              <div className="space-y-3 print:space-y-2">
                {data.certificates.map((c, i) => (
                  <div key={i} className="text-sm text-gray-600 p-3 rounded-lg bg-white shadow-sm border border-gray-100 print:p-2 print:shadow-none print:text-xs">
                    <div className="font-medium text-gray-800">{c.name}</div>
                    <div className="text-gray-600">{c.issuer}</div>
                    <div className="text-xs text-gray-500 font-medium">{c.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {data.interests?.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4 print:mb-3">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: theme }}></div>
                <h2 className="font-bold text-gray-800 print:text-base">Interests</h2>
              </div>
              <div className="flex flex-wrap gap-2 print:gap-1.5">
                {data.interests.map((interest, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 text-sm rounded-full font-medium bg-white shadow-sm border border-gray-100 text-gray-700 hover:shadow-md transition-shadow print:px-3 print:py-1 print:text-xs print:shadow-none"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Clearfix for print layout */}
      <div className="clear-both hidden print:block"></div>
    </div>
  );
}