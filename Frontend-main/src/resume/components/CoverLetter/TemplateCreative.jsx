import React from "react";

export default function TemplateCreative({ data, theme = "#2563eb" }) {
  // Convert HEX to RGBA (for opacity-safe colors)
  const hexToRgba = (hex, alpha = 1) => {
    const sanitized = hex.replace("#", "");
    const bigint = parseInt(sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Darken the main name color slightly
  const darkenHex = (hex, amount = 30) => {
    const sanitized = hex.replace("#", "");
    const num = parseInt(sanitized, 16);
    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00ff) - amount;
    let b = (num & 0x0000ff) - amount;
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Date formatting
  const currentDate =
    data.date ||
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Check if custom content already has letter structure
  const hasSenderInfo = /(Dear\s|Sincerely,|Best regards|Yours sincerely|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})/i.test(
    data.customContent || ""
  );

  // Default content
  const defaultContent = `I am writing to express my interest in the ${data.jobTitle} position at ${data.companyName}. ${
    data.jobDescription
      ? `I was particularly impressed by your requirement for ${data.jobDescription}.`
      : ""
  }

With my background in ${
    data.role || "my field"
  } and proven track record of success, I am confident that I possess the skills and experience necessary to excel in this role.

Thank you for considering my application. I look forward to the opportunity to discuss how my qualifications align with your needs.`;

  const content = data.customContent || defaultContent;

  // Function to highlight text
  const highlightText = (text) => {
    if (!text) return "";

    let highlighted = text;
    if (data.fullName) {
      highlighted = highlighted.replace(
        new RegExp(data.fullName, "g"),
        `<strong style="color:${theme}">${data.fullName}</strong>`
      );
    }
    if (data.companyName) {
      highlighted = highlighted.replace(
        new RegExp(data.companyName, "g"),
        `<strong style="color:${theme}">${data.companyName}</strong>`
      );
    }
    if (data.jobTitle) {
      highlighted = highlighted.replace(
        new RegExp(data.jobTitle, "g"),
        `<strong style="color:${theme}">${data.jobTitle}</strong>`
      );
    }
    return highlighted;
  };

  // Gradient background
  const generateGradient = (color) =>
    `linear-gradient(135deg, ${color} 0%, ${hexToRgba(color, 0.13)} 50%, ${hexToRgba(
      color,
      0.27
    )} 100%)`;

  return (
    <div
      id="cover-letter-template"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#fff",
        fontFamily:
          "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#1f2937",
        lineHeight: "1.6",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 8px 28px rgba(0,0,0,0.06)",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Patterns */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "300px",
          height: "300px",
          background: generateGradient(theme),
          opacity: "0.03",
          borderRadius: "50%",
          transform: "translate(100px, -100px)",
          zIndex: "0",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "200px",
          height: "200px",
          background: generateGradient(theme),
          opacity: "0.02",
          borderRadius: "50%",
          transform: "translate(-50px, 100px)",
          zIndex: "0",
        }}
      ></div>

      {/* Header */}
      {!hasSenderInfo && (
        <div
          style={{
            padding: "50px 60px 40px 60px",
            background: generateGradient(theme),
            position: "relative",
            zIndex: "1",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "40px",
              width: "80px",
              height: "80px",
              border: `2px solid ${hexToRgba(theme, 0.2)}`,
              borderRadius: "50%",
              opacity: "0.3",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "40px",
              width: "40px",
              height: "40px",
              border: `1px solid ${hexToRgba(theme, 0.3)}`,
              borderRadius: "8px",
              transform: "rotate(45deg)",
              opacity: "0.2",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "30px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px" }}>
              {data.fullName && (
                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: darkenHex(theme, 30),
                    marginBottom: "12px",
                    letterSpacing: "-0.8px",
                    lineHeight: "1.1",
                  }}
                >
                  {data.fullName}
                </div>
              )}

              {data.role && (
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#4b5563",
                    marginBottom: "24px",
                    paddingLeft: "4px",
                  }}
                >
                  {data.role}
                </div>
              )}

              {/* Contact Info */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                  fontSize: "15px",
                  color: "#4b5563",
                }}
              >
                {data.email && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: "8px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    ✉️ <span style={{ marginLeft: "10px" }}>{data.email}</span>
                  </div>
                )}
                {data.phone && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: "8px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    📱 <span style={{ marginLeft: "10px" }}>{data.phone}</span>
                  </div>
                )}
                {data.location && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: "8px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    📍 <span style={{ marginLeft: "10px" }}>{data.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Date */}
            <div
              style={{
                textAlign: "right",
                padding: "16px 20px",
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: `1px solid ${hexToRgba(theme, 0.2)}`,
                minWidth: "180px",
              }}
            >
              <div style={{ fontSize: "15px", fontWeight: "500" }}>
                {currentDate}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ padding: "60px", position: "relative", zIndex: "1" }}>
        {/* Recipient */}
        {!hasSenderInfo && (
          <div
            style={{
              marginBottom: "40px",
              padding: "28px",
              backgroundColor: "#f8fafc",
              borderRadius: "16px",
              borderLeft: `6px solid ${theme}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              position: "relative",
            }}
          >
            {data.companyName && (
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "800",
                  color: theme,
                  marginBottom: "6px",
                }}
              >
                {data.companyName}
              </div>
            )}
          </div>
        )}

        {/* Greeting */}
        {!hasSenderInfo && (
          <div
            style={{
              marginBottom: "30px",
              fontSize: "17px",
              fontWeight: "600",
              padding: "16px 20px",
              backgroundColor: "#fef7ff",
              borderRadius: "10px",
              border: `1px solid ${hexToRgba(theme, 0.15)}`,
            }}
          >
            {data.hiringManager
              ? `Dear ${data.hiringManager},`
              : "Dear Hiring Manager,"}
          </div>
        )}

        {/* Content */}
        <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#374151" }}>
          {content.split("\n\n").map((paragraph, index) => (
            <div
              key={index}
              style={{
                marginBottom: "24px",
                textAlign: "left",
                position: "relative",
                paddingLeft: "20px",
              }}
            >

              {paragraph.split("\n").map((line, i) => (
                <div
                  key={i}
                  style={{ marginBottom: "10px" }}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(line || "&nbsp;"),
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Closing */}
        {!hasSenderInfo && (
          <div
            style={{
              marginTop: "60px",
              padding: "30px",
              backgroundColor: "#fafafa",
              borderRadius: "16px",
              border: `1px solid ${hexToRgba(theme, 0.1)}`,
            }}
          >
            <div
              style={{
                marginBottom: "12px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#6b7280",
              }}
            >
              Sincerely,
            </div>

            <div
              style={{
                marginTop: "10px",
                fontWeight: "800",
                color: theme,
                fontSize: "22px",
              }}
            >
              {data.fullName}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
