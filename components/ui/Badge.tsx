import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-neutral-100 text-neutral-700",
      primary: "bg-primary-100 text-primary-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-amber-100 text-amber-800",
      outline: "bg-transparent border border-neutral-300 text-neutral-700",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
