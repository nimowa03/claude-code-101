"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { communityCopy } from "@/content/copy";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

function renderMultiline(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

export function Community() {
  return (
    <section id="community" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-8 text-center text-3xl font-bold text-zinc-100 sm:text-4xl">
            {communityCopy.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg">
            {renderMultiline(communityCopy.body)}
          </p>
        </FadeIn>

        {/* Charlee card */}
        <FadeIn delay={0.3}>
          <Card
            variant="glass"
            accentColor="purple"
            className="mx-auto mt-12 max-w-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                <User className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-lg font-bold text-zinc-100">
                  {communityCopy.charlee.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {renderMultiline(communityCopy.charlee.bio)}
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
