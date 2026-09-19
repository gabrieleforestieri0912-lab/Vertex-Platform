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
        // Neutrali del brand: base scura, nessun colore semantico.
        vertex: {
          bg: "#0A0A0A",
          surface: "#141414",
          border: "#262626",
          silver: "#C4C4C4",
          silverMuted: "#8A8A8A",
          steel: "#5A5A5A",
          highlight: "#E8E8E8",
        },
        /**
         * Unico accento cromatico del sito (viola elettrico), tarato per
         * contrasto AA su fondo vertex.bg:
         *  - accent        bordi, icone, glow          4.6:1  (min 3:1 per UI)
         *  - accent-soft   testo e link                7.2:1  (min 4.5:1)
         *  - accent-deep   riempimenti con testo bianco 7.1:1
         */
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
          deep: "#6D28D9",
        },
      },
    },
  },
  plugins: [],
};
export default config;
