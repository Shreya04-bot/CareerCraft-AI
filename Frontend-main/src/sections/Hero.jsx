import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import heroAnimation from "../assets/Talent_Search.json";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-12 gap-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-[#1a0a3a] dark:to-gray-830 text-gray-900 dark:text-white"
    >

      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-4 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-300 dark:bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-4 sm:right-10 w-48 sm:w-60 h-48 sm:h-60 bg-purple-400 dark:bg-purple-700 opacity-20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 sm:px-4 py-1 text-sm sm:text-base font-medium tracking-wide 
            bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md">
            AI-Powered Career Booster
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            Create{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Resumes & Cover Letters
            </span>{" "}
            that Get You Hired
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            Generate professional, ATS-friendly resumes and personalized cover letters in seconds. Let AI do the heavy lifting while you focus on landing your dream job.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-4">
            <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="px-8 sm:px-10 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold text-white
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                bg-[length:200%_200%] bg-[position:0%_50%]
                transition-all duration-500 ease-out
                hover:bg-[position:100%_50%]
                shadow-md hover:shadow-blue-500/40">
              Generate Now
            </Link>
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="flex-1 flex justify-center w-full"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative backdrop-blur-lg bg-white/10 dark:bg-black/10 p-4 sm:p-6 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700">
            <Lottie animationData={heroAnimation} loop={true} className="w-64 sm:w-80 md:w-[26rem] animate-float" />
            <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-purple-400 to-blue-500 opacity-25 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
