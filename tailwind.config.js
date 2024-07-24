/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Space Grotesk",
    },
    extend: {},
  },
  screens: {
    ss: "480px",
    sm: "600px",
    md: "768px",
    lg: "1099px",
  },
  plugins: [],
};
