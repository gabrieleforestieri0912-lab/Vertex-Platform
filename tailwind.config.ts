import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Le classi letterali delle famiglie accento vivono in lib/accents.ts.
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrali del brand: base scura, filo conduttore metallico.
        vertex: {
          bg: "#0A0A0A",
          bgRaised: "#0F0F14",
          surface: "#141414",
          surfaceElevated: "#191922",
          border: "#262626",
          silver: "#C4C4C4",
          silverMuted: "#8A8A8A",
          steel: "#5A5A5A",
          highlight: "#E8E8E8",
        },
        /**
         * Famiglia viola/indaco: era l'unico accento del sito, ora resta il
         * family di default (brand). Stessi valori, stesse garanzie di
         * contrasto documentate in README.
         */
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
          deep: "#6D28D9",
        },
        /**
         * Ciano/teal (D2). Stoppa tarata come la viola (contrasti misurati
         * con calcolo WCAG 2.1 su vertex.bg):
         *  - DEFAULT  bordi, icone, glow        10.9:1 (UI: min 3:1)
         *  - soft     testo e link              11.9:1 (testo: min 4.5:1)
         *  - deep     riempimenti con bianco    5.4:1
         */
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#7DD3FC",
          deep: "#0E7490",
        },
        /**
         * Magenta/rosa (D2) — contrasti misurati su vertex.bg:
         *  - soft testo 10.9:1 · DEFAULT UI 8.1:1 · deep con bianco 6.3:1
         */
        magenta: {
          DEFAULT: "#E879F9",
          soft: "#F9A8D4",
          deep: "#A21CAF",
        },
        /**
         * Ambra/arancio (D2):
         *  - soft testo 13.7:1 · DEFAULT UI 9.2:1 · deep con bianco 7.1:1
         *    (la prima scelta #B45309 col nero fermava a 3.9:1: stop più
         *    scuro e testo bianco, verificato con calcolo WCAG)
         */
        amber: {
          DEFAULT: "#F59E0B",
          soft: "#FCD34D",
          deep: "#92400E",
        },
      },
      /*
       * Gradienti nominati (D2): le variabili --grad-* vivono in globals.css,
       * qui diventano utility bg-grad-* (es. bg-grad-brand).
       */
      backgroundImage: {
        "grad-violet": "var(--grad-violet)",
        "grad-cyan": "var(--grad-cyan)",
        "grad-magenta": "var(--grad-magenta)",
        "grad-amber": "var(--grad-amber)",
        "grad-brand": "var(--grad-brand)",
      },
    },
  },
  /*
   * I 5 gradienti nominati restano disponibili come utility anche quando
   * nessun sorgente li usa direttamente (es. brand via solo variabili): la
   * fase 3/4 li consumerà come classi su hero e card in evidenza.
   */
  safelist: ["bg-grad-violet", "bg-grad-cyan", "bg-grad-magenta", "bg-grad-amber", "bg-grad-brand"],
  plugins: [],
};
export default config;
