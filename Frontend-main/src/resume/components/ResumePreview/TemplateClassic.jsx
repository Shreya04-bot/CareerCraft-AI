import React from "react";

export default function TemplateClassic({ data, theme }) {
    return (
        <div className={`p-6 bg-white text-gray-900 shadow-md`} id="resume-template" style={{ minWidth: 420 }}>
            <header className="text-center mb-4">
                <h1 className="text-2xl font-bold" style={{ color: theme }}>{data.fullName || "Your Name"}</h1>
                <p className="text-sm text-gray-600">{data.role}</p>
                <div className="text-xs text-gray-500 mt-1">
                    {data.email && <span>{data.email} | </span>}
                    {data.phone && <span>{data.phone} | </span>}
                    {data.location && <span>{data.location}</span>}
                </div>
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

            {data.summary && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Summary</h4>
                    <p className="text-sm text-gray-600 mt-2">{data.summary}</p>
                </section>
            )}

            {data.experience && data.experience.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Experience</h4>
                    <div className="space-y-3 mt-2">
                        {data.experience.map((e, i) => (
                            <div key={i}>
                                <div className="flex justify-between">
                                    <div className="font-semibold" style={{ color: theme }}>{e.role}</div>
                                    <div className="text-xs text-gray-500">{e.start} - {e.end}</div>
                                </div>
                                <div className="text-sm text-gray-600">{e.company}</div>
                                {e.description && <div className="text-sm text-gray-600 mt-1">{e.description}</div>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.education && data.education.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Education</h4>
                    <div className="space-y-3 mt-2">
                        {data.education.map((ed, i) => (
                            <div key={i}>
                                <div className="flex justify-between">
                                    <div className="font-semibold" style={{ color: theme }}>{ed.degree}</div>
                                    <div className="text-xs text-gray-500">{ed.start} - {ed.end}</div>
                                </div>
                                <div className="text-sm text-gray-600">{ed.institution}</div>
                                {ed.details && <div className="text-sm text-gray-600 mt-1">{ed.details}</div>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.projects && data.projects.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Projects</h4>
                    <div className="space-y-3 mt-2">
                        {data.projects.map((p, i) => (
                            <div key={i}>
                                <div className="font-semibold" style={{ color: theme }}>{p.name}</div>
                                {p.technologies && <div className="text-xs text-gray-500">{p.technologies}</div>}
                                {p.description && <div className="text-sm text-gray-600 mt-1">{p.description}</div>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.skills && data.skills.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Skills</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.skills.map((s, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs" style={{ backgroundColor: theme + '20', color: theme }}>
                                {s.name}{s.level ? ` (${s.level})` : ""}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {data.certificates && data.certificates.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Certificates</h4>
                    <div className="space-y-2 mt-2">
                        {data.certificates.map((cert, i) => (
                            <div key={i} className="text-sm text-gray-600">
                                <span className="font-medium">{cert.name}</span> - {cert.issuer} ({cert.year})
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.languages && data.languages.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Languages</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.languages.map((lang, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">
                                {lang.name}{lang.level ? ` (${lang.level})` : ""}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {data.interests && data.interests.length > 0 && (
                <section className="mb-3">
                    <h4 className="font-semibold text-sm text-gray-700 border-b pb-1" style={{ borderColor: theme }}>Interests</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.interests.map((interest, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">
                                {interest}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}