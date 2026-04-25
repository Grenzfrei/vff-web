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
      fontFamily: {
        sans: ["Barlow", "Arial", "sans-serif"],
      },
      fontSize: {
        base: ["16px", "1.5"],
      },
      boxShadow: {
        card: "0 4px 15px rgba(0, 0, 0, 0.18)",
      },
      spacing: {
        "section-mobile": "40px",
        "section-desktop": "80px",
      },
      screens: {
        tablet: "768px",
        desktop: "992px",
        wide: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
