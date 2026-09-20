import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Sezione con ritmo verticale coerente e scroll-margin per gli anchor. */
export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("scroll-mt-8 py-16 sm:py-20", className)}
      {...props}
    />
  );
}
