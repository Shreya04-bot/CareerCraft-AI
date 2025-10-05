const BASE_URL = import.meta.env.VITE_API_URL;

export async function generateSummaries(resumeData) {
  const res = await fetch(`${BASE_URL}/generate-summaries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resumeData),
  });
  return await res.json();
}

export async function generateCoverLetter(coverLetterData) {
  const res = await fetch(`${BASE_URL}/generate-cover-letters`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(coverLetterData),
  });
  return await res.json();
}
