"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "ghost" | "link";
type Color = "green" | "blue" | "purple" | "orange" | "zinc";

interface ButtonBaseProps {
  variant?: Variant;
  color?: Color;
  glow?: boolean;
  size?: "sm" | "md" | "lg";
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const colorMap: Record<Color, { solid: string; outline: string; ghost: string; link: string }> = {
  green: {
    solid: "bg-green-500 text-zinc-950 hover:bg-green-400",
    outline: "border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400",
    ghost: "text-green-400 hover:bg-green-500/10",
    link: "text-green-400 hover:text-green-300",
  },
  blue: {
    solid: "bg-blue-500 text-white hover:bg-blue-400",
    outline: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400",
    ghost: "text-blue-400 hover:bg-blue-500/10",
    link: "text-blue-400 hover:text-blue-300",
  },
  purple: {
    solid: "bg-purple-500 text-white hover:bg-purple-400",
    outline: "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400",
    ghost: "text-purple-400 hover:bg-purple-500/10",
    link: "text-purple-400 hover:text-purple-300",
  },
  orange: {
    solid: "bg-orange-500 text-white hover:bg-orange-400",
    outline: "border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400",
    ghost: "text-orange-400 hover:bg-orange-500/10",
    link: "text-orange-400 hover:text-orange-300",
  },
  zinc: {
    solid: "bg-zinc-700 text-zinc-100 hover:bg-zinc-600",
    outline: "border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500",
    ghost: "text-zinc-300 hover:bg-zinc-800",
    link: "text-zinc-300 hover:text-zinc-100",
  },
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "solid",
      color = "green",
      glow = false,
      size = "md",
      className,
      children,
      ...rest
    } = props;

    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer",
      sizeMap[size],
      colorMap[color][variant],
      variant === "outline" && "border",
      variant === "link" && "underline-offset-4 hover:underline px-0 py-0",
      glow && variant === "solid" && "glow-pulse",
      className
    );

    if ("href" in rest && rest.href) {
      const { href, ...anchorRest } = rest as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
