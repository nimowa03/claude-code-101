"use client";

import { SequentialReveal } from "@/components/animations/sequential-reveal";
import { Button } from "@/components/ui/button";
import { heroCopy } from "@/content/copy";
import { externalLinks } from "@/content/links";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(34,197,94,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Line 1 */}
        <SequentialReveal delay={0} className="mb-6">
          <p className="text-lg text-zinc-500">{heroCopy.line1}</p>
        </SequentialReveal>

        {/* Line 2 */}
        <SequentialReveal delay={0.8} className="mb-8">
          <h1 className="text-3xl font-bold leading-snug text-zinc-100 sm:text-4xl lg:text-5xl">
            {heroCopy.line2.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < heroCopy.line2.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
        </SequentialReveal>

        {/* Line 3 */}
        <SequentialReveal delay={2.0} className="mb-6">
          <p className="text-xl text-zinc-500">{heroCopy.line3}</p>
        </SequentialReveal>

        {/* Line 4 — gradient text */}
        <SequentialReveal delay={2.8} className="mb-12">
          <h2 className="gradient-text text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl">
            {heroCopy.line4.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < heroCopy.line4.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </SequentialReveal>

        {/* CTA buttons */}
        <SequentialReveal delay={4.0} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            href="#guide"
            variant="solid"
            color="green"
            size="lg"
            glow
          >
            {heroCopy.cta1}
            <ChevronDown className="h-5 w-5" />
          </Button>
          <Button
            href={externalLinks.rapid}
            variant="outline"
            color="green"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {heroCopy.cta2}
          </Button>
        </SequentialReveal>
      </div>
    </section>
  );
}
