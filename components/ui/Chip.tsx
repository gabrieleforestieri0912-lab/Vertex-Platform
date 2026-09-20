import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

/** Chip per filtri categoria. Lo stato selezionato è comunicato con
 *  `aria-pressed` + bordo/riempimento, non solo col colore. */
export function Chip({
  selected = false,
  className,
  children,
  type,
  ...props
}: ChipProps) {
  return (
    <button
      type={type ?? "button"}
      aria-pressed={selected}
      className={cn(
        "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium",
        "transition-colors duration-200 ease-out motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg",
        selected
          ? "border-accent/50 bg-accent/15 text-accent-soft"
          : "border-vertex-border bg-transparent text-vertex-silver hover:border-accent/30 hover:text-vertex-highlight",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
