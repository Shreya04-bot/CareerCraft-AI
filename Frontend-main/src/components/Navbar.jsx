import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen((s) => !s);

  // handle Home click (keeps your current behavior)
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const heroSection = document.getElementById("hero");
      if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // small delay to allow route change
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setMenuOpen(false);
  };

  // NAV ITEMS — removed Resume & Cover Letter
  const navItems = [
    { name: "Home", type: "custom", onClick: handleHomeClick },
    { name: "Features", type: "anchor", href: "#features" },
    { name: "Testimonials", type: "anchor", href: "#testimonials" },
    { name: "How It Works", type: "anchor", href: "#timeline" },
    { name: "Contact", type: "anchor", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/60 border-b border-transparent bg-clip-padding shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            CareerCraft AI
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 items-center font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "link" ? (
                <Link to={item.to} className="relative group">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : item.type === "anchor" ? (
                <a href={item.href} className="relative group">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <button type="button" onClick={item.onClick} className="relative group">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </button>
              )}
            </li>
          ))}

          {/* CTA Button -> now links to /resume */}
          <li>
            <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="ml-4 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
            >
              Generate Now
            </Link>
          </li>
        </ul>

        {/* Dark mode + hamburger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-pressed={darkMode}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-transform"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-2xl"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 dark:text-gray-300 bg-white/90 dark:bg-black/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-lg"
        >
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "link" ? (
                <Link to={item.to} onClick={() => setMenuOpen(false)} className="block">
                  {item.name}
                </Link>
              ) : item.type === "anchor" ? (
                <a href={item.href} onClick={() => setMenuOpen(false)} className="block">
                  {item.name}
                </a>
              ) : (
                <button type="button" onClick={item.onClick} className="block w-full text-left">
                  {item.name}
                </button>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-lg font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg transition-all duration-300"
            >
              Generate Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
