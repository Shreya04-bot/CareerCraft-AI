import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-l from-sky-100 via-white to-pink-100 
                dark:from-gray-950 dark:via-[#1a0a3a] dark:to-gray-830  
                text-gray-900 dark:text-white"
    >
      {/* Glowing Background Elements */}
      <div className="absolute -top-10 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-700 opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 dark:bg-purple-800 opacity-20 rounded-full blur-2xl -z-10"></div>

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Talk to Us
      </motion.h2>
      

      <div className="h-1 w-40 mx-auto mb-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600 rounded-full"></div>
      <h2 className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Have questions or feedback about your resume & cover letter? We'd love to hear from you!
      </h2>

      <form className="max-w-xl mx-auto space-y-6 bg-white dark:bg-[#0a001a] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-xl font-semibold text-white 
                     bg-gradient-to-r from-purple-600 to-blue-600 
                     hover:from-purple-700 hover:to-blue-700 
                     shadow-lg hover:shadow-purple-500/40 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
