import React, { useState } from "react";
import TopBar from "../../resume/components/TopBar";
import ResumeDashboard from "./ResumeDashboard";
import CoverLetterDashboard from "./CoverLetterDashboard";
import Navbar from "../../components/Navbar"; // import your main Navbar

export default function DashboardLayout({ darkMode }) {
  // Active tab: "resume" or "cover-letter"
  const [activeTab, setActiveTab] = useState("resume");

  // Theme & template states
  const [resumeTheme, setResumeTheme] = useState("#3b82f6");       // Resume primary
  const [coverTheme, setCoverTheme] = useState("#3b82f6");         // Cover Letter primary
  const [secondaryColor, setSecondaryColor] = useState("#9333ea"); // Shared accent
  const [resumeTemplate, setResumeTemplate] = useState("modern");
  const [coverTemplate, setCoverTemplate] = useState("classic");

  // Progress states
  const [resumeProgress, setResumeProgress] = useState(70);
  const [coverProgress, setCoverProgress] = useState(40);

  // Navbar visibility state (for mobile/desktop toggle)
  const [navbarVisible, setNavbarVisible] = useState(false);

  // Data for each section
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
  });

  const [coverLetterData, setCoverLetterData] = useState({
    companyName: "",
    hiringManager: "",
    jobTitle: "",
    jobDescription: "",
    customContent: "",
  });

  // Pick correct props based on active tab
  const theme = activeTab === "resume" ? resumeTheme : coverTheme;
  const template = activeTab === "resume" ? resumeTemplate : coverTemplate;
  const progress = activeTab === "resume" ? resumeProgress : coverProgress;
  const setTheme = activeTab === "resume" ? setResumeTheme : setCoverTheme;
  const setTemplate = activeTab === "resume" ? setResumeTemplate : setCoverTemplate;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <TopBar
        theme={theme}
        setTheme={setTheme}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
        template={template}
        setTemplate={setTemplate}
        progress={progress}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        navbarVisible={navbarVisible}          // pass toggle state
        setNavbarVisible={setNavbarVisible}    // pass toggle setter
      />

      {/* Navbar controlled by TopBar */}
      {navbarVisible && (
        <Navbar darkMode={darkMode} setDarkMode={() => {}} />
      )}

      {/* Content Area */}
      <main className="flex-1">
        {activeTab === "resume" ? (
          <ResumeDashboard
            theme={resumeTheme}
            secondaryColor={secondaryColor}   // pass accent too if needed
            template={resumeTemplate}
            data={resumeData}
            setData={setResumeData}
            setProgress={setResumeProgress}
          />
        ) : (
          <CoverLetterDashboard
            theme={coverTheme}
            secondaryColor={secondaryColor}   // pass accent
            template={coverTemplate}
            resumeData={resumeData}
            setProgress={setCoverProgress}
          />
        )}
      </main>
    </div>
  );
}
