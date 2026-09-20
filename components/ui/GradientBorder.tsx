import type { HTMLAttributes } from "react";
import { accentVars, type AccentFamily } from "@/lib/accents";
import { cn } from "@/lib/cn";

export interface GradientBorderProps extends HTMLAttributes<HTMLDivElement> {
  family?: AccentFamily | "brand";
}

/** Card/superficie con anello sfumato 1px. Senza supporto mask-composite
 *  resta il bordo solido vertex-border (nessun contenuto coperto). */
export function GradientBorder({
  family = "brand",
  className,
  style,
  children,
  ...props
}: GradientBorderProps) {
  return (
    <div
      className={cn("gradient-border relative rounded-lg", className)}
      style={{ ...accentVars(family), ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
