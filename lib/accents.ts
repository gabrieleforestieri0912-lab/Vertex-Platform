import type { CSSProperties } from "react";

/**
 * Le 4 famiglie di accento (decisione D2) + la famiglia "brand" che mescola
 * viola e ciano. Ogni famiglia espone classi Tailwind LETTERALI e complete:
 * Tailwind non genera classi costruite dinamicamente, quindi questa mappa è
 * il punto unico di indirection (il file è incluso nel content di Tailwind).
 *
 *  - text:   classe per il TESTO sull'accento (tono "soft", ≥ 4.5:1 su vertex.bg)
 *  - border: classe per bordi/UI (tono DEFAULT, ≥ 3:1 su vertex.bg)
 *  - glow:   classe per blob/glow sfocati
 *  - deep:   riempimento pieno + classe del testo leggibile sopra (verificato)
 */
export const accentFamilies = ["violet", "cyan", "magenta", "amber"] as const;

export type AccentFamily = (typeof accentFamilies)[number];

export interface AccentClasses {
  text: string;
  border: string;
  glow: string;
  grad: string;
  deep: string;
  onDeep: string;
}

export const accentClasses: Record<AccentFamily, AccentClasses> = {
  violet: {
    text: "text-accent-soft",
    border: "border-accent/40",
    glow: "bg-accent/25",
    grad: "bg-grad-violet",
    deep: "bg-accent-deep",
    onDeep: "text-white",
  },
  cyan: {
    text: "text-cyan-soft",
    border: "border-cyan/40",
    glow: "bg-cyan/25",
    grad: "bg-grad-cyan",
    deep: "bg-cyan-deep",
    onDeep: "text-white",
  },
  magenta: {
    text: "text-magenta-soft",
    border: "border-magenta/40",
    glow: "bg-magenta/25",
    grad: "bg-grad-magenta",
    deep: "bg-magenta-deep",
    onDeep: "text-white",
  },
  amber: {
    text: "text-amber-soft",
    border: "border-amber/40",
    glow: "bg-amber/25",
    grad: "bg-grad-amber",
    deep: "bg-amber-deep",
    // Bianco su #92400E: 7.1:1 (calcolo WCAG; il nero su #B45309 dava 3.9:1).
    onDeep: "text-white",
  },
};

/**
 * Variabili CSS per i componenti basati su gradiente (bordi sfumati, glow,
 * testo gradient). "brand" usa il gradiente misto viola→ciano con fallback
 * testo viola. Applicare via `style` sull'elemento radice del componente.
 */
export function accentVars(
  family: AccentFamily | "brand"
): CSSProperties {
  const grad =
    family === "brand" ? "var(--grad-brand)" : `var(--grad-${family})`;
  const soft =
    family === "amber"
      ? "var(--accent-amber-soft)"
      : family === "magenta"
        ? "var(--accent-magenta-soft)"
        : family === "cyan"
          ? "var(--accent-cyan-soft)"
          : "var(--accent-soft)";
  return {
    ["--accent-grad" as string]: grad,
    ["--accent-soft" as string]: soft,
  } as CSSProperties;
}
