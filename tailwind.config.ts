import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A03020",
          light: "#C04030",
        },
        secondary: {
          DEFAULT: "#506020",
          light: "#607030",
        },
        accent: {
          DEFAULT: "#D08040",
          gold: "#D0A050",
        },
        cta: {
          DEFAULT: "#A03020",
          hover: "#8A2818",
        },
        surface: {
          DEFAULT: "#F5F0EB",
          white: "#FFFFFF",
        },
        text: {
          DEFAULT: "#33302F",
          heading: "#33302F",
          muted: "#606060",
        },
        footer: "#33302F",
      },
      borderRadius: {
        lg: "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 4px 12px rgba(160, 48, 32, 0.08)",
        "card-hover": "0 8px 20px rgba(160, 48, 32, 0.12)",
        "ornament": "0 2px 8px rgba(208, 160, 80, 0.15)",
      },
      fontFamily: {
        sans: ["Barlow", "Arial", "sans-serif"],
        display: ["Cinzel", "serif"],
      },
      spacing: {
        "section-mobile": "2rem",
        "section-desktop": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
