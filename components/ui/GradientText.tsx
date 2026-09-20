import type { HTMLAttributes } from "react";
import { accentVars, type AccentFamily } from "@/lib/accents";
import { cn } from "@/lib/cn";

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "metal";
  family?: AccentFamily;
}

/** Testo con gradiente. Il fallback (niente background-clip: text) è un
 *  colore pieno "soft" della famiglia, già AA su vertex.bg. */
export function GradientText({
  variant = "accent",
  family = "violet",
  className,
  style,
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(variant === "metal" ? "text-metal" : "text-grad", className)}
      style={
        variant === "metal"
          ? style
          : { ...accentVars(family), ...style }
      }
      {...props}
    >
      {children}
    </span>
  );
}
