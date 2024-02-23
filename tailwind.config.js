/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12372A",
        secondary: "#436850",
        tartiary: "#607274",
        green: "#43766C",
        greenLite: "#85E6C5",
      },
    },
  },
  plugins: [],
};
