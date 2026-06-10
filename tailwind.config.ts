import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#102A43",
        nightBlue: "#0B1F33",
        softGold: "#D6A84F",
        lightCream: "#F7F0E3",
        parchment: "#E8D8B8",
        warmWhite: "#FFFDF7",
        softOlive: "#6F7D4F",
        textSlate: "#334155"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        scripture: ["var(--font-merriweather)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 42, 67, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
