import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#111111",
        gold: "#E6C58F",
        sky: "#8DD3FF",
        ink: "#FAFAFA",
        muted: "#A1A1AA",
        border: "rgba(250, 250, 250, 0.12)"
      },
      fontFamily: {
        sans: [
          "Geist",
          "Inter",
          "General Sans",
          "Satoshi",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(230, 197, 143, 0.16)",
        panel: "0 30px 90px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(230, 197, 143, 0.14), transparent 34%)",
        "linear-edge": "linear-gradient(180deg, rgba(250,250,250,0.1), rgba(250,250,250,0.03))"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
