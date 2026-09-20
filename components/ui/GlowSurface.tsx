import type { HTMLAttributes } from "react";
import { accentVars, type AccentFamily } from "@/lib/accents";
import { cn } from "@/lib/cn";

export interface GlowSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  family?: AccentFamily | "brand";
  /** Aggiunge il glow sfumato dietro la superficie (classe .glow-grad). */
  glow?: boolean;
}

/** Card "glass": fondo semitrasparente + blur di sfondo + bordo sottile.
 *  Il glow (se attivo) si intensifica al passaggio del gruppo `.group`
 *  superiore via opacity — mai animando filter. */
export function GlowSurface({
  family = "brand",
  glow = false,
  className,
  style,
  children,
  ...props
}: GlowSurfaceProps) {
  return (
    <div
      className={cn(
        "relative isolate rounded-lg border border-vertex-border bg-vertex-surface/80 backdrop-blur-sm",
        className
      )}
      style={{ ...accentVars(family), ...style }}
      {...props}
    >
      {glow ? <div aria-hidden className="glow-grad" /> : null}
      {children}
    </div>
  );
}
