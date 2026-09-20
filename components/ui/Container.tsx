import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Larghezze e padding condivisi da tutte le sezioni del sito. */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-5xl px-6 xl:max-w-6xl 2xl:max-w-7xl",
        className
      )}
      {...props}
    />
  );
}
