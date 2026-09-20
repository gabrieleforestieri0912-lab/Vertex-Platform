import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type BadgeTone = "violet" | "cyan" | "magenta" | "amber" | "neutral" | "blue" | "emerald" | "red" | "slate";

const toneStyles: Record<BadgeTone, { border: string; bg: string; text: string }> = {
  violet: { border: "border-[#7C5CFC]/20", bg: "bg-[#7C5CFC]/10", text: "text-[#A78BFA]" },
  blue: { border: "border-[#3B82F6]/20", bg: "bg-[#3B82F6]/10", text: "text-[#60A5FA]" },
  cyan: { border: "border-[#06B6D4]/20", bg: "bg-[#06B6D4]/10", text: "text-[#22D3EE]" },
  emerald: { border: "border-[#10B981]/20", bg: "bg-[#10B981]/10", text: "text-[#34D399]" },
  amber: { border: "border-[#F59E0B]/20", bg: "bg-[#F59E0B]/10", text: "text-[#FBBF24]" },
  red: { border: "border-[#EF4444]/20", bg: "bg-[#EF4444]/10", text: "text-[#F87171]" },
  magenta: { border: "border-[#EC4899]/20", bg: "bg-[#EC4899]/10", text: "text-[#F472B6]" },
  slate: { border: "border-[#64748B]/20", bg: "bg-[#64748B]/10", text: "text-[#94A3B8]" },
  neutral: { border: "border-vertex-border", bg: "bg-transparent", text: "text-vertex-silverMuted" },
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  icon?: LucideIcon;
}

export function Badge({ tone = "neutral", icon: Icon, className, children, ...props }: BadgeProps) {
  const t = toneStyles[tone];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
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
