import React from 'react';

export default function TemplateClassic({ data, theme = '#000000' }) {
  // Date formatting
  const currentDate = data.date || new Date().toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: 'numeric',
  });

  // Check if custom content already has letter structure
  const hasSenderInfo = /(Dear\s|Sincerely,|Best regards|Yours sincerely|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})/i.test(data.customContent || '');

  // Default content
  const defaultContent = `I am writing to express my interest in the ${data.jobTitle} position at ${data.companyName}. ${data.jobDescription ? `I was particularly impressed by your requirement for ${data.jobDescription}.` : ''}

With my background in ${data.role || 'my field'} and proven track record of success, I am confident that I possess the skills and experience necessary to excel in this role.

Thank you for considering my application. I look forward to the opportunity to discuss how my qualifications align with your needs.`;

  const content = data.customContent || defaultContent;

  // Function to highlight text with HTML
  const highlightText = (text) => {
    if (!text) return '';
    
    let highlighted = text;
    
    if (data.fullName) {
      highlighted = highlighted.replace(
        new RegExp(data.fullName, 'g'), 
        `<strong style="color:${theme}">${data.fullName}</strong>`
      );
    }
    
    if (data.companyName) {
      highlighted = highlighted.replace(
        new RegExp(data.companyName, 'g'), 
        `<strong style="color:${theme}">${data.companyName}</strong>`
      );
    }
    
    if (data.jobTitle) {
      highlighted = highlighted.replace(
        new RegExp(data.jobTitle, 'g'), 
        `<strong style="color:${theme}">${data.jobTitle}</strong>`
      );
    }
    
    return highlighted;
  };

  return (
    <div id="cover-letter-template" style={{ 
      padding: '20px', 
      fontFamily: 'Georgia, serif, aria-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Sender Information - SIMPLE DIV STRUCTURE */}
      {!hasSenderInfo && (
        <div>
          {data.fullName && <div style={{ fontWeight: 'bold', fontSize: '20px', color: theme }}>{data.fullName}</div>}
          {data.location && <div style={{ marginTop: '4px', fontFamily :'serif' }}>{data.location}</div>}
          {data.email && <div style={{ marginTop: '4px' }}>{data.email}</div>}
          {data.phone && <div style={{ marginTop: '4px' }}>{data.phone}</div>}
          <div style={{ marginTop: '8px' }}>{currentDate}</div>
        </div>
      )}

      {/* Spacing */}
      <div style={{ height: '30px' }}></div>

      {/* Recipient Information */}
      {!hasSenderInfo && (
        <div>
          {data.hiringManager && <div>{data.hiringManager}</div>}
          {data.companyName && <div style={{ fontWeight: 'bold', color: theme }}>{data.companyName}</div>}
          {data.companyAddress ? (
            <div>{data.companyAddress}</div>
          ) : (
            data.companyName && <div>[Company Address]</div>
          )}
        </div>
      )}

      {/* Spacing */}
      <div style={{ height: '20px' }}></div>

      {/* Salutation */}
      {!hasSenderInfo && (
        <div style={{ marginBottom: '20px' }}>
          {data.hiringManager ? `Dear ${data.hiringManager},` : 'Dear Hiring Manager,'}
        </div>
      )}

      {/* Content */}
      <div style={{ lineHeight: '1.6' }}>
        {content.split('\n\n').map((paragraph, index) => (
          <div key={index} style={{ marginBottom: '16px', textAlign: 'justify' }}>
            {paragraph.split('\n').map((line, lineIndex) => (
              <div 
                key={lineIndex}
                dangerouslySetInnerHTML={{ __html: highlightText(line) }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Spacing */}
      <div style={{ height: '40px' }}></div>

      {/* Closing */}
      {!hasSenderInfo && (
        <div>
          <div>Sincerely,</div>
          <div style={{ marginTop: '20px', fontWeight: 'bold', color: theme }}>{data.fullName}</div>
        </div>
      )}
    </div>
  );
}