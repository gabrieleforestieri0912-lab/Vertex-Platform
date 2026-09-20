import type { CSSProperties } from "react";

/**
 * Famiglie flat — colori solidi puliti, presi dai siti live.
 * Niente gradienti. Ogni progetto ha il suo solid.
 */
export const accentFamilies = [
  "violet",
  "blue",
  "cyan",
  "emerald",
  "amber",
  "red",
  "magenta",
  "slate",
] as const;

export type AccentFamily = (typeof accentFamilies)[number];

export interface AccentClasses {
  text: string;
  border: string;
  tile: string;
  dot: string;
  hoverText: string;
  solid: string; // hex for inline --accent
}

const solidHex: Record<AccentFamily, string> = {
  violet: "#7C5CFC",
  blue: "#3B82F6",
  cyan: "#06B6D4",
  emerald: "#10B981",
  amber: "#F59E0B",
  red: "#EF4444",
  magenta: "#EC4899",
  slate: "#64748B",
};

export const accentClasses: Record<AccentFamily, AccentClasses> = {
  violet: {
    text: "text-[#A78BFA]",
    border: "border-[#7C5CFC]/20",
    tile: "bg-[#7C5CFC]/10",
    dot: "bg-[#7C5CFC]",
    hoverText: "group-hover:text-[#A78BFA]",
    solid: solidHex.violet,
  },
  blue: {
    text: "text-[#60A5FA]",
    border: "border-[#3B82F6]/20",
    tile: "bg-[#3B82F6]/10",
    dot: "bg-[#3B82F6]",
    hoverText: "group-hover:text-[#60A5FA]",
    solid: solidHex.blue,
  },
  cyan: {
    text: "text-[#22D3EE]",
    border: "border-[#06B6D4]/20",
    tile: "bg-[#06B6D4]/10",
    dot: "bg-[#06B6D4]",
    hoverText: "group-hover:text-[#22D3EE]",
    solid: solidHex.cyan,
  },
  emerald: {
    text: "text-[#34D399]",
    border: "border-[#10B981]/20",
    tile: "bg-[#10B981]/10",
    dot: "bg-[#10B981]",
    hoverText: "group-hover:text-[#34D399]",
    solid: solidHex.emerald,
  },
  amber: {
    text: "text-[#FBBF24]",
    border: "border-[#F59E0B]/20",
    tile: "bg-[#F59E0B]/10",
    dot: "bg-[#F59E0B]",
    hoverText: "group-hover:text-[#FBBF24]",
    solid: solidHex.amber,
  },
  red: {
    text: "text-[#F87171]",
    border: "border-[#EF4444]/20",
    tile: "bg-[#EF4444]/10",
    dot: "bg-[#EF4444]",
    hoverText: "group-hover:text-[#F87171]",
    solid: solidHex.red,
  },
  magenta: {
    text: "text-[#F472B6]",
    border: "border-[#EC4899]/20",
    tile: "bg-[#EC4899]/10",
    dot: "bg-[#EC4899]",
    hoverText: "group-hover:text-[#F472B6]",
    solid: solidHex.magenta,
  },
  slate: {
    text: "text-[#94A3B8]",
    border: "border-[#64748B]/20",
    tile: "bg-[#64748B]/10",
    dot: "bg-[#64748B]",
    hoverText: "group-hover:text-[#94A3B8]",
    solid: solidHex.slate,
  },
};

export function accentVars(family: AccentFamily): CSSProperties {
  return {
    ["--accent" as string]: solidHex[family],
    ["--accent-soft" as string]: `var(--accent-${family}-soft)`,
  } as CSSProperties;
}

export function accentHex(family: AccentFamily): string {
  return solidHex[family];
}
