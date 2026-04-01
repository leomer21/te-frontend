"use client";

import { useState } from "react";

type WorkWithItem = {
  id: string;
  label: string;
  title: string;
  description: string;
};

const items: WorkWithItem[] = [
  {
    id: "idea",
    label: "Startups with an idea",
    title: "Startups that only have an idea",
    description:
      "You have a concept, a timeline, and priorities—but need a team that can turn it into something real and maintainable.",
  },
  {
    id: "mvp",
    label: "Solo founders",
    title: "Solo founders building MVPs",
    description:
      "You want to ship quickly, keep quality high, and work with developers who communicate clearly and execute steadily.",
  },
  {
    id: "support",
    label: "Long-term support",
    title: "Businesses that need long-term maintenance and support",
    description:
      "You already have software in production and need dependable improvements, fixes, and ongoing engineering care over time.",
  },
  {
    id: "partners",
    label: "Overseas partners",
    title: "Overseas partners looking for reliable product delivery",
    description:
      "You need delivery you can trust: clear progress, calm communication, and consistent follow-through across time zones.",
  },
  {
    id: "start-fast",
    label: "Ready-to-start teams",
    title: "Teams that need experienced developers who can begin quickly",
    description:
      "You need experienced engineers who can integrate quickly, reduce ramp-up time, and deliver without unnecessary delay.",
  },
];

export function IndustrySelector() {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "idea");
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Built for clients who need real execution
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65 md:text-base">
          We work best with:
        </p>
      </div>

      <div className="grid gap-6 px-6 pb-6 pt-6 md:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {items.map((i) => {
            const isActive = i.id === activeId;
            return (
              <button
                key={i.id}
                type="button"
                onClick={() => setActiveId(i.id)}
                className={[
                  "group flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition",
                  isActive
                    ? "border-white/12 bg-white/5"
                    : "border-transparent hover:border-white/10 hover:bg-white/[0.03]",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1",
                    "bg-sky-500/15 ring-sky-400/25",
                  ].join(" ")}
                >
                  <span className="text-sm font-semibold text-white/85">•</span>
                </span>
                <span className="text-sm font-semibold text-white/80 group-hover:text-white">
                  {i.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6">
          <div
            className={[
              "absolute left-0 top-0 h-1 w-full bg-gradient-to-r",
              "from-sky-400 to-indigo-500",
            ].join(" ")}
          />

          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
              <span className="text-lg font-semibold text-white/85">⌁</span>
            </span>
            <div>
              <div
                className={[
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
                  "bg-sky-500/15 ring-sky-400/25 text-sky-200",
                ].join(" ")}
              >
                {active.title}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="max-w-2xl text-sm leading-6 text-white/65 md:text-base">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

