/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "custom-sm": { max: "640px" }, //Custom breakpoint for 640px and below..hehehe
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        500: 500,
        300: 300,
        400: 400,
      },
    },
  },
  plugins: [],
};
