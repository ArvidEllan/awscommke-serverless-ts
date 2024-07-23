/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens and up
      md: "768px", // Medium screens and up
      lg: "1025px", // Large screens and up
      xl: "1280px", // Extra large screens and up
      "2xl": "1536px", // 2x extra large screens and up
    },
    extend: {
      colors: {
        main: "#0a0116", // Main theme color
        secondary: "#fff6ea", // Secondary color: pages that don't take the main color
        accent: "#f79b01", // Accent color for buttons, cards, etc.
      },
      backgroundColor: {
        "dark-bg": "#0a0116", // First background color
        "light-bg": "#fff6ea", // Second background color
      },
      textColor: {
        "dark-text": "#0a0116",
        "light-text": "#fff6ea",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".font-thin-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 100,
          fontStyle: "italic",
        },
        ".font-extralight-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 200,
          fontStyle: "italic",
        },
        ".font-light-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 300,
          fontStyle: "italic",
        },
        ".font-regular-italic": {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
        },
      });
    },
  ],
};
