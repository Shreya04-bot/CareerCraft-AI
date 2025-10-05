export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-purple-600 dark:text-purple-400">
      {/* Spinning Dual Ring */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-purple-300 border-b-transparent rounded-full animate-spin [animation-delay:-0.5s]"></div>
      </div>

      {/* Optional Loading Text */}
      <div className="text-xl font-medium animate-pulse">Loading...</div>
    </div>
  );
}
