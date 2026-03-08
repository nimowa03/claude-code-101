"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface SequentialRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SequentialReveal({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: SequentialRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
