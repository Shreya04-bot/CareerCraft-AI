import React, { useState, useCallback } from "react";
import { THEMES, TEMPLATES } from "../utils/templates";
import { Palette, Layout, ChevronDown, Home, Menu, Grid } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopBar({
  theme,
  setTheme,
  secondaryColor,
  setSecondaryColor,
  template,
  setTemplate,
  progress,
  activeTab,
  setActiveTab,
  navbarVisible,        // ✅ add this
  setNavbarVisible,   
}) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showSecondaryPicker, setShowSecondaryPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const themeColors = [
    "#2563EB", "#1D4ED8", "#1E40AF", "#1E3A8A", "#3730A3",
    "#4338CA", "#4F46E5", "#6366F1", "#7C3AED", "#6D28D9",
    "#3B82F6", "#0EA5E9", "#059669", "#047857", "#065F46",
    "#0D9488", "#0F766E", "#115E59", "#15803D", "#16A34A",
    "#7E22CE", "#6B21A8", "#581C87", "#9333EA", "#8B5CF6",
    "#A855F7", "#C026D3", "#A21CAF", "#86198F", "#C084FC",
    "#3b82f6", "#9333ea", "#D946EF", "#0E7490", "#155E75",
    "#164E63", "#0891B2", "#06B6D4", "#22D3EE", "#14B8A6",
    "#10B981", "#22C55E", "#84CC16", "#65A30D", "#C2410C",
    "#9A3412", "#7C2D12", "#EA580C", "#F97316", "#FB923C",
    "#EAB308", "#F59E0B", "#CA8A04", "#A16207", "#854D0E",
    "#FACC15", "#475569", "#334155", "#1E293B", "#111827",
    "#64748B", "#374151", "#4B5563", "#6B7280", "#9CA3AF",
    "#DC2626", "#B91C1C", "#991B1B", "#E11D48", "#BE123C",
    "#9F1239", "#EC4899", "#DB2777", "#9D174D", "#EF4444"
  ];

  const handleThemeChange = useCallback(
    (color) => {
      setTheme(color);
      setShowColorPicker(false);
    },
    [setTheme]
  );

  const handleSecondaryChange = useCallback(
    (color) => {
      setSecondaryColor(color);
      setShowSecondaryPicker(false);
    },
    [setSecondaryColor]
  );

  const handleHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleTabChange = useCallback(
    (tab) => {
      setActiveTab(tab);
      setMobileMenuOpen(false);
    },
    [setActiveTab]
  );

  return (
    <div className="w-full p-4 flex items-center justify-between 
      bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-sm border-b 
      border-gray-200 dark:border-gray-700 
      shadow-sm relative z-50 transition-all duration-300"
    >
      {/* LEFT COLUMN: Menu + Home + Tabs */}
      <div className="flex items-center gap-2 md:gap-4 flex-1 px-4 md:px-11">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
        >
          <Menu className="w-4 h-4 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Navbar Button */}
        <button
          onClick={() => setNavbarVisible(prev => !prev)}
          className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-200"
          title="Toggle Navbar"
        >
          <Grid className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleTabChange("resume")}
            className={`px-6 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "resume"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
          >
            Resume Builder
          </button>
          <button
            onClick={() => handleTabChange("cover-letter")}
            className={`px-6 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "cover-letter"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
          >
            Cover Letter
          </button>
        </div>
      </div>

      {/* CENTER COLUMN: Theme + Template */}
      <div className="hidden md:flex items-center gap-6 justify-center flex-1">
        {/* Primary Theme Picker */}
        <div className="flex items-center gap-6 relative">
          <div className="relative">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div
                  className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: theme }}
                />
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${showColorPicker ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>

            {showColorPicker && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] p-4 min-w-[280px] max-h-64 overflow-y-auto">
                <div className="grid grid-cols-8 gap-2">
                  {themeColors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => handleThemeChange(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${theme === color
                          ? "border-gray-900 dark:border-white scale-110 shadow-md"
                          : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                        }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Secondary Theme Picker */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <button
                onClick={() => setShowSecondaryPicker(!showSecondaryPicker)}
                className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div
                  className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: secondaryColor }}
                />
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${showSecondaryPicker ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>

            {showSecondaryPicker && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] p-4 min-w-[280px] max-h-64 overflow-y-auto">
                <div className="grid grid-cols-8 gap-2">
                  {themeColors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => handleSecondaryChange(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${secondaryColor === color
                          ? "border-gray-900 dark:border-white scale-110 shadow-md"
                          : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                        }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Template Selector */}
        <div className="flex items-center gap-2">
          <Layout className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 text-sm text-gray-700 dark:text-gray-200"
          >
            {TEMPLATES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* RIGHT COLUMN: Progress Bar */}
      <div className="flex flex-col items-center gap-1 flex-1">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 text-center">
          {progress}% Complete
        </div>
        <div className="w-3/5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, #6366f1, #ec4899)`,
            }}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 shadow-lg z-[9999] md:hidden">
                    <div className="p-4 space-y-2">
                        {/* Tabs */}
                        <button onClick={() => handleTabChange("resume")}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium">
                            Resume Builder
                        </button>
                        <button onClick={() => handleTabChange("cover-letter")}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium ">
                            Cover Letter
                        </button>

                        {/* Theme & Template selectors for mobile */}
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Theme</span>
                                <button
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: theme }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                />
                            </div>

                            {/* Mobile Color Picker */}
                            {showColorPicker && (
                                <div className="mt-2 p-2 bg-white dark:bg-gray-800 border rounded-xl shadow-lg grid grid-cols-6 gap-2">
                                    {themeColors.map((color, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleThemeChange(color)}
                                            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${theme === color ? 'border-gray-900 scale-110 shadow-md' : 'border-gray-300 hover:border-gray-400'}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Accent</span>
                                <button
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: secondaryColor }}
                                    onClick={() => setShowSecondaryPicker(!showSecondaryPicker)}
                                />
                            </div>

                            {showSecondaryPicker && (
                                <div className="mt-2 p-2 bg-white dark:bg-gray-800 border rounded-xl shadow-lg grid grid-cols-6 gap-2">
                                    {themeColors.map((color, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSecondaryChange(color)}
                                            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${secondaryColor === color ? 'border-gray-900 scale-110 shadow-md' : 'border-gray-300 hover:border-gray-400'}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Template</span>
                                <select value={template} onChange={(e) => setTemplate(e.target.value)}
                                    className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 text-sm text-gray-700 dark:text-gray-200">
                                    {TEMPLATES.map((t) => (
                                        <option key={t.id} value={t.id}>{t.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}

      {/* Global Overlay for color pickers */}
      {(showColorPicker || showSecondaryPicker) && !mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => {
            setShowColorPicker(false);
            setShowSecondaryPicker(false);
          }}
        />
      )}
    </div>
  );
}
