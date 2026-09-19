import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vertex: {
          bg: "#0A0A0A",
          surface: "#141414",
          border: "#262626",
          silver: "#C4C4C4",
          silverMuted: "#8A8A8A",
          steel: "#5A5A5A",
          highlight: "#E8E8E8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
