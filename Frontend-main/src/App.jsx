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

// 🔥 Lazy-loaded AI Tools
const ResumeGenerator = lazy(() => import("../src/resume/pages/DashboardLayout"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // <-- Get current route

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // 🔥 Preload resume & cover components right after homepage loads
    import("../src/resume/pages/DashboardLayout");

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  // Hide Navbar/Footer on specific routes
  const hideLayout = ["/resume"].includes(location.pathname);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {!hideLayout && <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Homepage */}
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
          {/* AI Tools */}
          <Route path="/resume" element={<ResumeGenerator />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
