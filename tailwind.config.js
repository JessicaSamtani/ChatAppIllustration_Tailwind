/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        paleVioletSubHeading: "hsl(276, 100%, 81%)",
        moderateVioletChatLeft: "hsl(276, 55%, 52%)",
        desaturatedDarkVioletChatRight: "hsl(271, 15%, 43%)",
        grayishBluePlaceholderText: "hsl(206, 6%, 79%)",
        veryDarkDesaturatedVioletHeading: "hsl(271, 36%, 24%)",
        darkGrayishVioletParagraph: "hsl(270, 7%, 64%)",
        lightGrayishVioletBg: "hsl(270, 20%, 96%)",
        veryDarkDesaturatedVioletSubmit: "hsl(271, 36%, 24%)",
        veryLightMagentaButtonOutline: "hsl(289, 100%, 72%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
