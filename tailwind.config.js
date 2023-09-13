/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00b2f3",
        secondary: "#ff1089",
        "bg-2": "#f4f7f7",
        "bg-3": "#0194c9",
        "bg-4": "#353535",
        "txt-1": "#969fa8",
        "txt-2": "#565656",
      },
      lineHeight: {
        11: "4rem",
      },
      transitionProperty: {
        line: "line-height",
        right: "right , visibility",
      },
      boxShadow: {
        personalized: "0.067em 0.067em 4.133em rgba(12, 71, 84, 0.08)",
        insent: "inset 0 -30px 5px -30px rgba(255, 255, 255, 0.55)",
        "insent-lg": "inset 0 -30px 5px -30px rgba(150, 159, 168, 0.55)",
      },
    },
  },
  plugins: [],
};
