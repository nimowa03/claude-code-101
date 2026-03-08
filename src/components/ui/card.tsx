import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "gradient" | "default";
  accentColor?: "green" | "blue" | "purple" | "orange";
}

const accentBorderMap = {
  green: "hover:border-green-500/30",
  blue: "hover:border-blue-500/30",
  purple: "hover:border-purple-500/30",
  orange: "hover:border-orange-500/30",
};

export function Card({
  children,
  className,
  variant = "glass",
  accentColor = "green",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800/50 p-6 transition-all duration-300",
        variant === "glass" &&
          "bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-black/20",
        variant === "gradient" &&
          "bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 hover:shadow-lg hover:shadow-black/20",
        variant === "default" && "bg-zinc-900",
        accentBorderMap[accentColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
