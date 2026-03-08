"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import type { guideCopy } from "@/content/copy";

type Step = (typeof guideCopy.steps)[number];

interface GuideStepProps {
  step: Step;
  index: number;
}

function renderMultiline(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split("\n").length - 1 && <br />}
    </span>
  ));
}

export function GuideStep({ step, index }: GuideStepProps) {
  return (
    <FadeIn delay={0.1 * index}>
      <Card variant="glass" accentColor="orange" className="relative overflow-hidden">
        {/* Step number badge */}
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="rounded-md bg-orange-500/10 px-3 py-1 text-sm font-bold text-orange-500">
            STEP {step.step}
          </span>
        </div>

        <h3 className="mb-4 text-xl font-bold text-zinc-100 sm:text-2xl">
          {step.title}
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-zinc-400">
          <p>{renderMultiline(step.body)}</p>

          {/* Step 1: example */}
          {"example" in step && step.example && (
            <div className="rounded-xl bg-zinc-800/50 p-4 text-sm">
              <p className="text-red-400/80">
                <span className="font-bold">X</span> &quot;{step.example.bad}&quot;
              </p>
              <p className="mt-1 text-green-400/80">
                <span className="font-bold">O</span> &quot;{step.example.good}&quot;
              </p>
            </div>
          )}

          {/* Step 2: list */}
          {"list" in step && step.list && (
            <ul className="space-y-2 pl-1">
              {step.list.map((item, i) => (
                <li key={i} className="text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {"bodyAfter" in step && step.bodyAfter && (
            <p>{renderMultiline(step.bodyAfter)}</p>
          )}

          {/* Step 3: models + criteria */}
          {"models" in step && step.models && (
            <ol className="space-y-1 pl-1">
              {step.models.map((model, i) => (
                <li key={i} className="text-zinc-400">
                  <span className="text-orange-400/80">{String.fromCharCode(9312 + i)}</span>{" "}
                  {model}
                </li>
              ))}
            </ol>
          )}

          {"criteria" in step && step.criteria && (
            <div className="rounded-xl bg-zinc-800/50 p-4">
              <p className="mb-2 text-sm font-semibold text-zinc-300">
                고르는 기준:
              </p>
              <ul className="space-y-1 text-sm">
                {step.criteria.map((c, i) => (
                  <li key={i} className="text-zinc-400">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Step 4: methods */}
          {"methods" in step && step.methods && (
            <div className="space-y-3">
              {step.methods.map((method, i) => (
                <div key={i} className="rounded-xl bg-zinc-800/50 p-4">
                  <p className="text-sm font-semibold text-zinc-300">
                    방법 {i + 1}: {method.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{method.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Step 5: channels */}
          {"channels" in step && step.channels && (
            <div className="space-y-3">
              {step.channels.map((channel, i) => (
                <div key={i} className="rounded-xl bg-zinc-800/50 p-4">
                  <p className="text-sm font-semibold text-zinc-300">
                    {String.fromCharCode(9312 + i)} {channel.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {renderMultiline(channel.desc)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tip */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-orange-500/10 bg-orange-500/5 p-4">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
          <p className="text-sm leading-relaxed text-orange-300/80">
            {renderMultiline(step.tip)}
          </p>
        </div>
      </Card>
    </FadeIn>
  );
}
