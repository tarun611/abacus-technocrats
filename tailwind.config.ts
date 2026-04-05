import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8A9B88",
        "primary-dark": "#6F7F6D",
        border: "#E0E0E0",
        light: "#F5F5F5",
        text: "#333333",
      },
    },

    /* 🔥 THIS IS KEY: replace default primary */
    colors: {
      transparent: "transparent",
      current: "currentColor",

      primary: "#8A9B88",
      "primary-dark": "#6F7F6D",

      white: "#ffffff",
      black: "#000000",

      gray: {
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
  },
  plugins: [],
};

export default config;