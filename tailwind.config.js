/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./location.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#d5966c",
        "almost-black": "#151515",
        "dark-grey": "#444444",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ['"Big Shoulders Display"', "sans-serif"],
        secondary: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
