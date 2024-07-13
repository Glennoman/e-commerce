/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",

        // Neutral Colors
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        blackLightbox: "hsla(0, 0%, 0%, 0.75)", // Using 75% opacity for lightbox background
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        base: "16px", // Equivalent to font-size for paragraph text
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
