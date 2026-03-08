"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";
import { channelsCopy } from "@/content/copy";
import { externalLinks } from "@/content/links";
import { Youtube, AtSign, Users } from "lucide-react";

const channelConfig = [
  {
    key: "youtube" as const,
    icon: Youtube,
    href: externalLinks.youtube,
    color: "text-red-400",
    accentColor: "blue" as const,
  },
  {
    key: "threads" as const,
    icon: AtSign,
    href: externalLinks.threads,
    color: "text-zinc-300",
    accentColor: "blue" as const,
  },
  {
    key: "gigath" as const,
    icon: Users,
    href: externalLinks.gigath,
    color: "text-blue-400",
    accentColor: "blue" as const,
  },
];

export function Channels() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {channelConfig.map((channel, i) => {
            const copy = channelsCopy[channel.key];
            const Icon = channel.icon;
            return (
              <FadeIn key={channel.key} delay={0.1 * i}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    variant="glass"
                    accentColor={channel.accentColor}
                    className="flex flex-col items-center gap-3 py-8 text-center hover:-translate-y-1"
                  >
                    <Icon className={`h-7 w-7 ${channel.color}`} />
                    <p className="font-semibold text-zinc-200">{copy.label}</p>
                    <p className="text-sm text-zinc-500">{copy.desc}</p>
                  </Card>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
