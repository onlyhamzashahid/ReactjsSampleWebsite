/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  theme: {
    // colors: {
    //   blueMain: '#5569fe',
    // },
    extend: {},
  },
  variants: {
    imageRendering: ["responsive"],
  },
  plugins: [require("tailwindcss-image-rendering")],
};

