"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { heroBridgeCopy } from "@/content/copy";

export function HeroBridge() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <FadeIn delay={0}>
          <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {heroBridgeCopy.line1}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg leading-relaxed text-zinc-500 sm:text-xl">
            {heroBridgeCopy.line2.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < heroBridgeCopy.line2.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg leading-relaxed text-zinc-500 sm:text-xl">
            {heroBridgeCopy.line3.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < heroBridgeCopy.line3.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="text-xl font-bold leading-relaxed text-zinc-100 sm:text-2xl">
            {heroBridgeCopy.line4}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
