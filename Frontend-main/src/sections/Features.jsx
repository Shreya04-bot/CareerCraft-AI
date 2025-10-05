import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Resume",
    desc: "Generate a professional, ATS-friendly resume in seconds tailored to your skills and experience.",
    icon: "🤖",
  },
  {
    title: "Smart Cover Letters",
    desc: "Craft personalized cover letters that align perfectly with job descriptions using AI assistance.",
    icon: "📝",
  },
  {
    title: "Job-Matched Suggestions",
    desc: "Get tailored recommendations for resume keywords and achievements to stand out in your industry.",
    icon: "🎯",
  },
  {
    title: "Multiple Templates",
    desc: "Choose from sleek, modern resume and cover letter templates designed by UI/UX experts.",
    icon: "📑",
  },
  {
    title: "One-Click Export",
    desc: "Download your resume & cover letters in PDF, DOCX, or JSON format instantly.",
    icon: "📂",
  },
  {
    title: "Dark & Light Themes",
    desc: "Switch themes to preview how your resume looks across styles and stand out visually.",
    icon: "🌗",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className ="py-20 px-6 md:px-20 
       bg-gradient-to-r from-sky-100 via-white to-pink-100 
        dark:from-gray-950 dark:via-[#1a0a3a] dark:to-gray-830
       text-gray-900 dark:text-white"

    >
      
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose ResumeGenAI?
      </motion.h2>
      

      {/* Gradient divider */}
      <div className="h-1 w-40 mx-auto mb-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600 rounded-full"></div>

      {/* Feature Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="relative group rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Inner Card */}
            <div className="bg-white dark:bg-[#0a001a]  border border-sky-300 
                           rounded-2xl p-6 shadow-md 
                           transition duration-300 transform hover:-translate-y-2 
                           hover:shadow-2xl hover:shadow-blue-300 dark:hover:shadow-purple-500/30">
              {/* Floating Icon */}
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
