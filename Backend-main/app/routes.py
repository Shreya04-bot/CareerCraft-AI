from flask import Blueprint, request, jsonify
from flask_cors import CORS  # ✅ added
from .openrouter_client import generate_text
import json
import re

routes = Blueprint("routes", __name__)
CORS(routes)  # ✅ ensures preflight OPTIONS gets handled correctly for this blueprint

def clean_json_response(raw_text: str):
    """Clean AI output so it can be safely parsed into JSON"""
    if not raw_text:
        raise ValueError("Empty response from AI model")
    
    # Remove Markdown-style code blocks
    cleaned = re.sub(r"^```json|```$", "", raw_text.strip(), flags=re.MULTILINE).strip()
    
    # Extract JSON substring if extra text is around it
    match = re.search(r"\{[\s\S]*\}", cleaned)
    if match:
        cleaned = match.group(0)
    
    try:
        return json.loads(cleaned)
    except Exception as e:
        raise ValueError(f"Failed to parse AI response: {cleaned[:200]}... ({e})")

@routes.route("/generate-summaries", methods=["POST"])
def generate_summaries():
    data = request.json
    prompt = f"""
    Generate **6 professional resume summaries** for this candidate:

    Candidate Info:
    - Name: {data.get('fullName')}
    - Role: {data.get('role')}
    - Email: {data.get('email')}
    - Phone: {data.get('phone')}
    - Location: {data.get('location')}
    - LinkedIn: {data.get('linkedin')}
    - GitHub: {data.get('github')}
    - Portfolio: {data.get('portfolio')}
    - Experience: {data.get('experience')}
    - Education: {data.get('education')}
    - Skills: {data.get('skills')}
    - Projects: {data.get('projects')}

    Instructions:
    1. The **first 3 summaries** (Fresher, Intermediate, Expert) should be **short and concise** (2-3 lines each).
    2. The **next 3 summaries** (Fresher, Intermediate, Expert) should be **more detailed** (5-6 lines each).
    
    Return output in JSON exactly like:
    {{
        "Short": {{
            "Fresher": "<text>",
            "Intermediate": "<text>",
            "Expert": "<text>"
        }},
        "Detailed": {{
            "Fresher": "<text>",
            "Intermediate": "<text>",
            "Expert": "<text>"
        }}
    }}
    """
    try:
        summaries = generate_text(prompt)
        parsed = clean_json_response(summaries)
        return jsonify(parsed)
    except Exception as e:
        print("AI error:", e)
        parsed = {
            "Short": {"Fresher": "...", "Intermediate": "...", "Expert": "..."},
            "Detailed": {"Fresher": "...", "Intermediate": "...", "Expert": "..."}
        }

    return jsonify(parsed)

@routes.route("/generate-cover-letters", methods=["POST"])
def generate_cover_letter_bodies():
    data = request.json
    prompt = f"""
    You are an expert cover letter writer.

    Using the candidate info below, generate **only the body text** (exclude header and signature) 
    for three cover letters — Fresher, Intermediate, Expert — applying for the position "{data.get('jobTitle')}" at "{data.get('companyName')}".
    
    Candidate Info:
    - Name: {data.get('fullName')}
    - Role: {data.get('role')}
    - Email: {data.get('email')}
    - Phone: {data.get('phone')}
    - Location: {data.get('location')}
    - LinkedIn: {data.get('linkedin')}
    - GitHub: {data.get('github')}
    - Portfolio: {data.get('portfolio')}
    - Experience: {data.get('experience')}
    - Education: {data.get('education')}
    - Skills: {data.get('skills')}
    - Projects: {data.get('projects')}
    - Job Description: {data.get('jobDescription')}

    Requirements:
    - Keep it professional and concise.
    - Each body should be 2-3 paragraphs.
    - Return strictly in JSON like:
    {{
        "Fresher": "<body text>",
        "Intermediate": "<body text>",
        "Expert": "<body text>"
    }}
    """

    try:
        bodies = generate_text(prompt)
        parsed = clean_json_response(bodies)

        # Ensure all three keys exist even if AI output is incomplete
        for key in ["Fresher", "Intermediate", "Expert"]:
            if key not in parsed:
                parsed[key] = "..."
        return jsonify(parsed)

    except Exception as e:
        print("AI error:", e)
        # fallback if AI fails completely
        parsed = {
            "Fresher": "...",
            "Intermediate": "...",
            "Expert": "..."
        }
        return jsonify(parsed)
