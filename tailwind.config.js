/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Deep Slate
        surface: "#1e293b",    // Slate 800
        primary: "#f59e0b",    // Soft Amber
        secondary: "#10b981",  // Emerald
        muted: "#64748b",      // Slate 500
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
