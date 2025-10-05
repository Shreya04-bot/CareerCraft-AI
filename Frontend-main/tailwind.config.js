/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'ripple': 'ripple 0.6s linear',
        'ripple-glow': 'ripple-glow 0.6s linear forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.2)", opacity: "0.9" },
          "100%": { transform: "scale(3.5)", opacity: "0" },
        },
        'ripple-glow': {
          '0%': {
            transform: 'scale(0.2)',
            opacity: '0.9',
          },
          '100%': {
            transform: 'scale(3.5)',
            opacity: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
