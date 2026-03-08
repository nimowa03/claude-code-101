"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ctaCopy } from "@/content/copy";
import { externalLinks } from "@/content/links";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl space-y-12">
        {/* Lead magnet CTA */}
        <FadeIn>
          <Card variant="gradient" accentColor="green" className="text-center">
            <div className="flex justify-center">
              <Mail className="mb-4 h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">
              {ctaCopy.leadMagnet.title}
            </h3>
            <ul className="mt-6 space-y-3 text-left">
              {ctaCopy.leadMagnet.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-zinc-400"
                >
                  <span className="mt-1 text-green-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href={externalLinks.rapid}
                variant="solid"
                color="green"
                size="lg"
                glow
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaCopy.leadMagnet.cta} &rarr;
              </Button>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              {ctaCopy.subtext.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < ctaCopy.subtext.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </Card>
        </FadeIn>

        {/* Community CTA */}
        <FadeIn delay={0.15}>
          <Card variant="glass" accentColor="purple" className="text-center">
            <div className="flex justify-center">
              <MessageCircle className="mb-4 h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">
              {ctaCopy.community.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {ctaCopy.community.body.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < ctaCopy.community.body.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="mt-8">
              <Button
                href={externalLinks.gigath}
                variant="outline"
                color="purple"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaCopy.community.cta} &rarr;
              </Button>
            </div>
          </Card>
        </FadeIn>

        {/* Mini FAQ */}
        <FadeIn delay={0.3}>
          <div className="flex items-start gap-3 rounded-2xl border border-zinc-800/30 bg-zinc-900/30 p-6">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
            <div>
              <p className="font-semibold text-zinc-300">
                Q. {ctaCopy.faq.q}
              </p>
              <p className="mt-1 text-sm text-zinc-500">&rarr; {ctaCopy.faq.a}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
