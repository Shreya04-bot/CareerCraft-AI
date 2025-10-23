import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Core UI
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./sections/Footer";

// Sections for Homepage
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

// Lazy-loaded AI Tools
const ResumeGenerator = lazy(() => import("../src/resume/pages/DashboardLayout"));

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false); // ✅ controls Navbar in Resume
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    import("../src/resume/pages/DashboardLayout"); // preload
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const hideLayout = ["/resume"].includes(location.pathname);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Navbar for non-resume pages */}
      {!hideLayout && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonials />
                <Timeline />
                <Contact />
              </>
            }
          />

          <Route
            path="/resume"
            element={
              <>
                {/* TopBar with ability to toggle Navbar */}
                <ResumeGenerator
                  darkMode={darkMode}
                  navbarVisible={navbarVisible}
                  setNavbarVisible={setNavbarVisible}
                />
              </>
            }
          />
        </Routes>
      </Suspense>

      {/* Scroll & Footer */}
      <ScrollToTopButton />
      {!hideLayout && <Footer />}

      {/* Navbar for Resume page controlled by TopBar */}
      {hideLayout && navbarVisible && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}
    </div>
  );
}

export default App;
