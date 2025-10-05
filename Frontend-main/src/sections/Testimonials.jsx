import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Singh",
    role: "Software Engineer",
    text: "CareerCraft AI helped me create a tailored resume that finally passed ATS filters. I landed 3 interviews within a week!",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Rahul Nair",
    role: "Product Manager",
    text: "The AI-generated cover letter was so personalized that recruiters actually mentioned it during interviews. Total game-changer!",
    image: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Meera Kapoor",
    role: "HR Recruiter",
    text: "I recommend this tool to candidates. It saves hours of editing while keeping resumes professional and job-focused.",
    image: "https://i.pravatar.cc/100?img=7",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-l from-sky-100 via-white to-pink-100 dark:from-gray-950 dark:via-[#1a0a3a] dark:to-gray-830 dark:text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Success Stories from Our Users
      </motion.h2>

      <div className="h-1 w-40 mx-auto mb-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 dark:from-cyan-500 dark:via-cyan-600 dark:to-violet-600 rounded-full"></div>

      {/* Testimonials Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0 z-10 ">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative group rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white dark:bg-[#0a001a]  border border-sky-300 
                           rounded-2xl p-6 shadow-md 
                           transition duration-300 transform hover:-translate-y-2 
                           hover:shadow-2xl hover:shadow-blue-300 dark:hover:shadow-purple-500/30">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="text-2xl text-purple-500 font-bold mr-2">“</span>
                {item.text}
                <span className="text-2xl text-purple-500 font-bold ml-1">”</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
