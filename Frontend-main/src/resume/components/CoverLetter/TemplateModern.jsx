import React from "react";

export default function TemplateModern({ data, theme = "#E53935" }) {
  const currentDate =
    data.date ||
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const hasSenderInfo = /(Dear\s|Sincerely,|Best regards|Yours sincerely|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})/i.test(
    data.customContent || ""
  );

  const defaultContent = `I am writing to express my interest in the ${data.jobTitle} position at ${data.companyName}. ${data.jobDescription
      ? `I was particularly impressed by your requirement for ${data.jobDescription}.`
      : ""
    }

With my background in ${data.role || "my field"} and proven track record, I am confident in my ability to excel in this role.

Thank you for considering my application. I look forward to discussing how my qualifications align with your needs.`;

  const content = data.customContent || defaultContent;

  const highlightText = (text) => {
    if (!text) return "";
    let highlighted = text;
    if (data.fullName)
      highlighted = highlighted.replace(
        new RegExp(data.fullName, "g"),
        `<strong style="color:${theme}">${data.fullName}</strong>`
      );
    if (data.companyName)
      highlighted = highlighted.replace(
        new RegExp(data.companyName, "g"),
        `<strong style="color:${theme}">${data.companyName}</strong>`
      );
    if (data.jobTitle)
      highlighted = highlighted.replace(
        new RegExp(data.jobTitle, "g"),
        `<strong style="color:${theme}">${data.jobTitle}</strong>`
      );
    return highlighted;
  };

  return (
    <div  id="cover-letter-template"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        color: "#333",
        lineHeight: "1.4",
      }}
    >
      {/* Header Section with Red Background */}
      <div style={{
        backgroundColor: theme,
        color: "white",
        padding: "40px 50px 30px 50px"
      }}>
        {data.fullName && (
          <div style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "8px",
            letterSpacing: "0.5px"
          }}>
            {data.fullName}
          </div>
        )}

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "20px"
        }}>
          {/* Contact Info - Left Side */}
          <div style={{ fontSize: "14px", lineHeight: "1.6" }}>
            {data.email && <div style={{ marginBottom: "4px" }}>{data.email}</div>}
            {data.phone && <div style={{ marginBottom: "4px" }}>{data.phone}</div>}
            {data.location && <div>{data.location}</div>}
            <div style={{ fontWeight: "500", marginTop: "8px" }}>{currentDate}</div>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "50px" }}>
        {/* Recipient Info */}
        {!hasSenderInfo && (
          <div style={{ marginBottom: "30px", fontSize: "14px", lineHeight: "1.5" }}>
            {data.hiringManager && (
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                {data.hiringManager}
              </div>
            )}
            {data.companyName && (
              <div style={{ fontWeight: "600", color: theme, marginBottom: "4px" }}>
                {data.companyName}
              </div>
            )}
            {data.companyAddress ? (
              <div>{data.companyAddress}</div>
            ) : (
              data.companyName && <div>[Company Address]</div>
            )}
          </div>
        )}

        {/* Salutation */}
        {!hasSenderInfo && (
          <div
            style={{
              marginBottom: "25px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {data.hiringManager ? `Dear ${data.hiringManager},` : "Dear Hiring Manager,"}
          </div>
        )}

        {/* Body Content */}
        <div
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          {content.split("\n\n").map((paragraph, index) => (
            <div
              key={index}
              style={{
                marginBottom: "18px",
                textAlign: "left",
              }}
            >
              {paragraph.split("\n").map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  style={{ marginBottom: "8px" }}
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
          <div style={{ marginTop: "40px", fontSize: "14px" }}>
            <div style={{ marginBottom: "8px" }}>Sincerely,</div>
            <div
              style={{
                marginTop: "25px",
                fontWeight: "bold",
                color: theme,
                fontSize: "16px",
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