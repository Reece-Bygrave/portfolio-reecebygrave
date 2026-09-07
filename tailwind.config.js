/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "0.6",
          },
          "50%": {
            transform: "translateY(8px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "scroll-bounce": "scrollBounce 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
