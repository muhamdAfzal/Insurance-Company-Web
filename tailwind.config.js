/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003a37",
        secondary: "#436850",
        tartiary: "#607274",
        green: "#25826a",
        greenLite: "#597f7d",
        greenAlternative: "#184d46",
        overlayBg: "rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
  important: true,
};
