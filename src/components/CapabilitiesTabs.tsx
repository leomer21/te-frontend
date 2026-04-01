"use client";

import { useMemo, useState } from "react";

type Capability = {
  id: string;
  label: string;
  title: string;
  description: string;
  highLevel: string[];
  lowLevel: string[];
};

const capabilities: Capability[] = [
  {
    id: "saas",
    label: "AI SaaS Products",
    title: "AI-Powered SaaS Products",
    description:
      "We architect, build, and scale modern SaaS platforms with security-first foundations, delightful UX, and operational excellence.",
    highLevel: [
      "End-to-end product development",
      "Scalable cloud architecture (AWS/Azure/GCP)",
      "Subscription & billing integrations",
      "API design and integration",
    ],
    lowLevel: [
      "Feature development & iteration",
      "CI/CD pipeline automation",
      "Observability & reliability engineering",
      "Advanced data analytics & reporting",
    ],
  },
  {
    id: "marketing",
    label: "Marketing Suites",
    title: "AI Marketing Suites",
    description:
      "Automate targeting, segmentation, and lifecycle campaigns with privacy-aware personalization and measurable ROI.",
    highLevel: [
      "Customer journey automation",
      "Recommendation & segmentation engines",
      "Experimentation (A/B) framework",
      "CRM + data warehouse integrations",
    ],
    lowLevel: [
      "Event tracking instrumentation",
      "Attribution modeling",
      "Real-time scoring pipelines",
      "Email/SMS workflow orchestration",
    ],
  },
  {
    id: "custom",
    label: "Custom AI Dev",
    title: "Custom AI Development",
    description:
      "From prototype to production: we deliver AI features that are robust, observable, and aligned with your business constraints.",
    highLevel: [
      "Solution architecture & strategy",
      "Model evaluation & deployment",
      "Security & compliance alignment",
      "Human-in-the-loop workflows",
    ],
    lowLevel: [
      "RAG & knowledge systems",
      "Vector search and retrieval tuning",
      "Prompt/tooling infrastructure",
      "Data pipelines and model monitoring",
    ],
  },
];

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      {children}
    </div>
  );
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm leading-6 text-white/70">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20">
        <span className="text-[12px] text-emerald-300">✓</span>
      </span>
      <span>{children}</span>
    </div>
  );
}

export function CapabilitiesTabs() {
  const [activeId, setActiveId] = useState(capabilities[0]?.id ?? "saas");
  const active = useMemo(
    () => capabilities.find((c) => c.id === activeId) ?? capabilities[0],
    [activeId],
  );

  return (
    <CardShell>
      <div className="px-6 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
              <span className="text-[10px] font-semibold">⚙</span>
            </span>
            Our Capabilities
          </div>
          <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
            A complete suite of engineering services
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/65 md:text-base">
            Choose a lane—or combine them. We build systems that are secure,
            scalable, and measurable from day one.
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-white/8 px-6 pt-6">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-1">
          {capabilities.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={[
                  "flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition",
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-[0_18px_60px_rgba(59,130,246,.18)]"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 px-6 pb-6 pt-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <h3 className="text-lg font-semibold text-white">{active.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            {active.description}
          </p>

          <div className="mt-5 grid gap-3">
            {active.highLevel.map((item) => (
              <CheckRow key={item}>{item}</CheckRow>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-sm font-semibold text-white/85">
            Low-Level Services
          </div>
          <div className="mt-4 grid gap-3">
            {active.lowLevel.map((item) => (
              <CheckRow key={item}>{item}</CheckRow>
            ))}
          </div>
        </div>
      </div>
    </CardShell>
  );
}

