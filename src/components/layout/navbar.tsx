"use client";

import { cn } from "@/lib/utils";
import { navCopy } from "@/content/copy";
import { externalLinks } from "@/content/links";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);

  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/50"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(9, 9, 11, ${v})`),
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-zinc-100">
          {navCopy.brand}
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {navCopy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={externalLinks.rapid}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-zinc-950",
              "transition-colors hover:bg-green-400"
            )}
          >
            무료로 받기
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
