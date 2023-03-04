/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8FF35",
        green2: "#87D322",
        buttonHover: "#8CC83A",
        black2: "#2B2B2B",
        gray1: "#8B8B8B",
        gray2: "#ADADAD",
        gray3: "#F5F5F5",
        gray4: "#F1F1F1",
      },
    },
    screens: {
      sm: "420px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
