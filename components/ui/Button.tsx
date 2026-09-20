import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  [
    "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
    "transition-colors duration-200 ease-out motion-reduce:transition-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg",
  ].join(" "),
  {
    variants: {
      variant: {
        // Hover che scurisce (non schiarisce): il bianco resta ≥ 7:1.
        // Bianco su accent DEFAULT era 4.23:1 (sotto AA).
        primary: "bg-accent-deep text-white hover:bg-accent-deep/85",
        secondary:
          "border border-vertex-border text-vertex-silver hover:border-accent/40 hover:text-vertex-highlight",
        ghost: "text-vertex-silver hover:bg-accent/10 hover:text-accent-soft",
      },
      size: {
        md: "px-5",
        sm: "min-h-9 px-3.5",
        lg: "min-h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
