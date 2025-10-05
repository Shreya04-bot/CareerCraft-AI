export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white py-5 px-6 text-center bg-gradient-to-r from-sky-100 via-white to-pink-100 dark:from-purple-900 dark:via-black dark:to-purple-900">
      {/* Glowing Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-10 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 space-y-2">
        {/* Brand */}
        <p className="text-sm sm:text-base font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-300 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-pink-800 to-purple-500">
            CareerCraft AI
          </span>
        </p>
      </div>
    </footer>
  );
}
