import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "active-color": "var(--Unnamed-Color, var(--Unnamed-Color, #FFF));",
        "unactive-color": "var(--Unnamed-Color, rgba(255, 255, 255, 0.43));",
        "border-color": "var(--Unnamed-Color, #E50AA7);",
        "bg-button": "var(--Unnamed-Color, rgba(255, 255, 255, 0.05));",
        "blue-color": "#1EE0E1",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
