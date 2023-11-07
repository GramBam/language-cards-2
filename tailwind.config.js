/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "easter-pink": "#f9ceee",
        "easter-purple": "#e0cdff",
        "easter-blue": "#c1f0fb",
        "easter-green": "#dcf9a8",
        "easter-yellow": "#ffebaf",
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
