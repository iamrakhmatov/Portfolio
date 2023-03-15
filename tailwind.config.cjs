/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-72": "spin 72s linear infinite",
        "spin-72-back": "backward-spin 72s linear infinite",
        "spin-75": "spin 75s linear infinite",
        "spin-75-back": "backward-spin 75s linear infinite",
        "spin-95": "spin 95s linear infinite",
        "spin-95-back": "backward-spin 95s linear infinite",
        "spin-115": "spin 115s linear infinite",
        "spin-115-back": "backward-spin 115s linear infinite",
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        "backward-spin": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(4deg)",
          },
          "75%": {
            transform: "rotate(-4deg)",
          },
        },
      },
      fontFamily: {
        acme: ["Acme"],
        anonym: ["Anonymous Pro"],
        expletus: ["Expletus Sans"],
        frederic: ["Fredericka the Great"],
        gideon: ["Gideon Roman"],
      },
      colors: {
        primary: {
          900: "#23213e",
          800: "#2d2b4f",
          700: "#35325c",
          600: "#4B4884",

          300: "#A5A2CD",
          200: "#B1AFD4",
          100: "#BEBDDB",
          50: "#D8D7E9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
