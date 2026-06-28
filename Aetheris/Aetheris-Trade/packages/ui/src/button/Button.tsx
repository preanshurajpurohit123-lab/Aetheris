import * as React from "react";
import { cn } from "../lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;

  loading?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "disabled:pointer-events-none disabled:opacity-50",

          {
            "bg-blue-600 text-white hover:bg-blue-700":
              variant === "primary",

            "bg-slate-800 text-white hover:bg-slate-700":
              variant === "secondary",

            "border border-slate-600 bg-transparent text-white hover:bg-slate-800":
              variant === "outline",

            "bg-transparent text-white hover:bg-slate-800":
              variant === "ghost",

            "bg-red-600 text-white hover:bg-red-700":
              variant === "danger",
          },

          {
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-5 text-base": size === "md",
            "h-12 px-6 text-lg": size === "lg",
          },

          fullWidth && "w-full",

          className
        )}
        {...props}
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          leftIcon
        )}

        <span>{children}</span>

        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";