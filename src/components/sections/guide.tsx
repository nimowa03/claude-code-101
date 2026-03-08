"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { GuideStep } from "@/components/sections/guide-step";
import { guideCopy } from "@/content/copy";
import { Button } from "@/components/ui/button";
import { externalLinks } from "@/content/links";
import { heroCopy } from "@/content/copy";

export function Guide() {
  return (
    <section id="guide" className="relative px-6 py-24 sm:py-32">
      {/* Section header */}
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
              {guideCopy.title}
            </h2>
            <p className="mt-2 text-lg text-zinc-500">{guideCopy.subtitle}</p>
            <div className="mt-6 space-y-2">
              <p className="text-base leading-relaxed text-zinc-400">
                {guideCopy.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < guideCopy.description.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <p className="text-base text-zinc-300">
                {guideCopy.descriptionSub}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="space-y-8">
          {guideCopy.steps.map((step, i) => (
            <GuideStep key={step.step} step={step} index={i} />
          ))}
        </div>

        {/* Outro */}
        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-lg leading-relaxed text-zinc-400">
              {guideCopy.outro.line1.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < guideCopy.outro.line1.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
            <ul className="mt-6 space-y-2">
              {guideCopy.outro.items.map((item, i) => (
                <li key={i} className="text-base text-zinc-300">
                  &quot;{item}&quot;
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-zinc-200">
              {guideCopy.outro.line2.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < guideCopy.outro.line2.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>

            {/* CTA after guide */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href={externalLinks.rapid}
                variant="solid"
                color="green"
                size="lg"
                glow
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroCopy.cta2}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
