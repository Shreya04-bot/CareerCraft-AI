import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    type: "Resume",
    items: [
      { title: "Sign Up", description: "Create an account to start building your professional resume." },
      { title: "Enter Details", description: "Add your work experience, education, and skills." },
      { title: "Generate AI Resume", description: "Get a polished, ATS-friendly resume in seconds." },
      { title: "Download & Apply", description: "Export in PDF or DOCX and start applying with confidence." },
    ],
  },
  {
    type: "Cover Letter",
    items: [
      { title: "Choose Job Role", description: "Select the job position or industry you’re targeting." },
      { title: "Input Resume Data", description: "Auto-fill details from your resume for consistency." },
      { title: "Generate AI Cover Letter", description: "Receive a tailored, professional cover letter instantly." },
      { title: "Download & Send", description: "Export and attach it to your applications effortlessly." },
    ],
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-sky-100 via-white to-pink-100 
                dark:from-gray-950 dark:via-[#1a0a3a] dark:to-gray-830 
                text-gray-900 dark:text-white"
    >
      
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How ResumeGenAI Works
      </motion.h2>

      <div className="h-1 w-40 mx-auto mb-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600 rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((workflow, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold mb-8 text-purple-600 dark:text-purple-400 text-center">
              {workflow.type} Workflow
            </h3>
            {workflow.items.map((step, stepIdx) => (
              <motion.div
                key={stepIdx}
                className="bg-white dark:bg-[#0a001a] border border-blue-200 dark:border-gray-700 
                           rounded-2xl p-6 shadow-xl hover:shadow-blue-300 dark:hover:shadow-purple-500/30 
                           transition duration-300 transform hover:-translate-y-1 mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stepIdx * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-2xl shadow-md">
                    <FaRegCheckCircle />
                  </div>
                  <h4 className="text-xl font-semibold">{`${stepIdx + 1}. ${step.title}`}</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
        <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="px-16 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg 
                     hover:from-purple-700 hover:to-blue-700 transition duration-300">
              Try It Now
            </Link>
      </div>
    </section>
  );
}
