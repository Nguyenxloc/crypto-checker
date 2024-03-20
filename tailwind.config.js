/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },

    colors: {
      black: "#000",
      primary: "#808080",
      transparentDark: "rgba(255,255,255,.1)",
      transparentWrite: "rgba(255,255,255,0.05)",
      transparentYellow3: "rgba(255, 212, 100, 0.10)",
      transparentYellow4: "rgba(255, 255, 255, 0.20)",
      transparentYellow5: "rgba(255, 255, 255, 0.50)",
      transparentYellow6: "rgba(255, 255, 255, 0.05)",
      rgba080: "rgba(0, 0, 0, 0.80)",
      tp3: "rgba(0, 0, 0, 0.30)",
      linear1: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)",

      yellow3: "#F9CA84",
      black2: "#1E162D",
      black3: "#372F47",
      black4: "#121212",
      black5: "#171717",
      black6: "#0D0D0D",
      black7: "#1C1C1C",
      black8: "#1F1F1F",
      black9: "#999999",
      black10: "#292929",

      gray: "#171123",
      gray2: "#A99CC3",
      gray3: "#B2B2B2",
      gray4: "#4C4C4C",
      gray5: "#242424",
      gray6: "#141414",

      white: "#fff",
      purple: "#B9A9FB",
      yellow: "#DBFF73",
      transparent3: "rgba(0, 0, 0, 0.60)",
      transparent10: "rgba(255, 255, 255, 0.10)",
      primary_red: "#EB5252",
      purple2: "#A28CFF",
      accentLow: "#BCE6EC",
      transparentModal: "rgba(0, 0, 0, 0.80)",
      transparent1: "rgba(255, 255, 255, 0.05)",
      transparent2: "rgba(219, 255, 115, 0.10)",
      transparent0: "rgba(0, 0, 0, 0)",
    },
  },
  plugins: [],
};
