"use client";

import { useMemo, useState } from "react";

type Industry = {
  id: string;
  label: string;
  accent: "sky" | "fuchsia" | "emerald" | "orange" | "amber" | "rose";
  title: string;
  description: string;
  bullets: string[];
};

const industries: Industry[] = [
  {
    id: "healthcare",
    label: "Healthcare & Life Sciences",
    accent: "sky",
    title: "Healthcare & Life Sciences",
    description:
      "We help teams build secure, compliant systems—from data platforms to clinical automation—designed for reliability and auditability.",
    bullets: [
      "AI-assisted imaging and document processing",
      "Operational automation & workflow orchestration",
      "Secure data platforms and analytics",
      "Predictive models and monitoring",
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    accent: "fuchsia",
    title: "E-commerce",
    description:
      "Transform online retail with personalization, automation, and data-driven insights that improve conversion and retention.",
    bullets: [
      "Personalization & recommendation engines",
      "Inventory and supply chain optimization",
      "Customer support automation",
      "Dynamic pricing and promotion strategies",
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    accent: "emerald",
    title: "Real Estate",
    description:
      "Bring intelligent automation to property workflows—valuation, market insights, and lead qualification—with measurable outcomes.",
    bullets: [
      "Automated valuation models (AVM)",
      "AI-based lead scoring and nurturing",
      "Market trend prediction and analysis",
      "Virtual property experiences",
    ],
  },
  {
    id: "travel",
    label: "Travel & Hospitality",
    accent: "orange",
    title: "Travel & Hospitality",
    description:
      "Deliver seamless travel experiences with smart booking, pricing optimization, and customer intelligence.",
    bullets: [
      "Personalized trip planning",
      "Dynamic pricing for flights and hotels",
      "AI-powered concierge assistants",
      "Guest sentiment analytics",
    ],
  },
  {
    id: "insurance",
    label: "Insurance",
    accent: "amber",
    title: "Insurance",
    description:
      "Modernize claims, fraud detection, and underwriting with systems that are traceable, secure, and production-ready.",
    bullets: [
      "Risk assessment & underwriting automation",
      "Claims processing and validation",
      "Fraud detection systems",
      "Personalized policy recommendations",
    ],
  },
  {
    id: "retail",
    label: "Retail",
    accent: "rose",
    title: "Retail",
    description:
      "Optimize inventory, prevent loss, and personalize omnichannel experiences using reliable data foundations.",
    bullets: [
      "Intelligent inventory forecasting",
      "In-store foot traffic analysis",
      "AI-powered loss prevention",
      "Omnichannel personalization strategies",
    ],
  },
];

function accentStyles(accent: Industry["accent"]) {
  switch (accent) {
    case "sky":
      return {
        pill: "bg-sky-500/15 ring-sky-400/25 text-sky-200",
        bar: "from-sky-400 to-sky-500",
        icon: "bg-sky-500/15 ring-sky-400/25",
      };
    case "fuchsia":
      return {
        pill: "bg-fuchsia-500/15 ring-fuchsia-400/25 text-fuchsia-200",
        bar: "from-fuchsia-400 to-fuchsia-500",
        icon: "bg-fuchsia-500/15 ring-fuchsia-400/25",
      };
    case "emerald":
      return {
        pill: "bg-emerald-500/15 ring-emerald-400/25 text-emerald-200",
        bar: "from-emerald-400 to-emerald-500",
        icon: "bg-emerald-500/15 ring-emerald-400/25",
      };
    case "orange":
      return {
        pill: "bg-orange-500/15 ring-orange-400/25 text-orange-200",
        bar: "from-orange-400 to-orange-500",
        icon: "bg-orange-500/15 ring-orange-400/25",
      };
    case "amber":
      return {
        pill: "bg-amber-500/15 ring-amber-400/25 text-amber-200",
        bar: "from-amber-400 to-amber-500",
        icon: "bg-amber-500/15 ring-amber-400/25",
      };
    case "rose":
      return {
        pill: "bg-rose-500/15 ring-rose-400/25 text-rose-200",
        bar: "from-rose-400 to-rose-500",
        icon: "bg-rose-500/15 ring-rose-400/25",
      };
  }
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm leading-6 text-white/70">
      <span className="mt-2 inline-flex h-5 w-5 items-center justify-center">
        <span className="h-[2px] w-[10px] rounded bg-sky-400/70" />
      </span>
      <span>{children}</span>
    </div>
  );
}

export function IndustrySelector() {
  const [activeId, setActiveId] = useState(industries[2]?.id ?? "realestate");
  const active = useMemo(
    () => industries.find((i) => i.id === activeId) ?? industries[0],
    [activeId],
  );
  const styles = accentStyles(active.accent);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6">
        <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
          Select an Industry
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
          We tailor solutions to the constraints of your domain: compliance,
          latency, data quality, and the realities of production.
        </p>
      </div>

      <div className="grid gap-6 px-6 pb-6 pt-6 md:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {industries.map((i) => {
            const isActive = i.id === activeId;
            const s = accentStyles(i.accent);
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
                    s.icon,
                  ].join(" ")}
                >
                  <span className="text-sm font-semibold text-white/85">▦</span>
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
              styles.bar,
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
                  styles.pill,
                ].join(" ")}
              >
                {active.title}
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                {active.description}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-white/85">
              Key AI Solutions
            </div>
            <div className="mt-4 grid gap-3">
              {active.bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

