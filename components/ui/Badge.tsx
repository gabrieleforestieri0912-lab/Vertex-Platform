import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type BadgeTone = "violet" | "cyan" | "magenta" | "amber" | "neutral";

const toneStyles: Record<BadgeTone, { border: string; bg: string; text: string }> =
  {
    violet: {
      border: "border-accent/40",
      bg: "bg-accent/10",
      text: "text-accent-soft",
    },
    cyan: {
      border: "border-cyan/40",
      bg: "bg-cyan/10",
      text: "text-cyan-soft",
    },
    magenta: {
      border: "border-magenta/40",
      bg: "bg-magenta/10",
      text: "text-magenta-soft",
    },
    amber: {
      border: "border-amber/40",
      bg: "bg-amber/10",
      text: "text-amber-soft",
    },
    neutral: {
      border: "border-vertex-border",
      bg: "bg-transparent",
      text: "text-vertex-silver",
    },
  };

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  icon?: LucideIcon;
}

/** Etichetta compatta. Lo stato non è mai comunicato SOLO col colore:
 *  l'icona (quando presente) e il testo restano la fonte primaria. */
export function Badge({
  tone = "neutral",
  icon: Icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const t = toneStyles[tone];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em]",
        t.border,
        t.bg,
        t.text,
        className
      )}
      {...props}
    >
      {Icon ? <Icon aria-hidden className="h-3 w-3" /> : null}
      {children}
    </span>
  );
}
