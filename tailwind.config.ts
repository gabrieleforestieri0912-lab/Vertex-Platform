import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vertex: {
          bg: "#0A0A0A",
          bgRaised: "#111113",
          surface: "#141416",
          surfaceElevated: "#1A1A1E",
          border: "#262628",
          silver: "#C8C8CC",
          silverMuted: "#8A8A90",
          steel: "#5A5A5A",
          highlight: "#F2F2F3",
        },
        accent: {
          DEFAULT: "#7C5CFC",
          soft: "#A78BFA",
          deep: "#6D28D9",
        },
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  safelist: [],
  plugins: [],
};
export default config;
