type Value = {
  title: string;
  description: string;
  accent: "sky" | "fuchsia" | "emerald" | "orange";
};

const values: Value[] = [
  {
    title: "KPI-Driven Excellence",
    description:
      "We measure what matters: performance, reliability, and outcomes—so delivery stays predictable.",
    accent: "sky",
  },
  {
    title: "Global Elite Team",
    description:
      "Senior engineers with battle-tested experience building production systems at scale.",
    accent: "fuchsia",
  },
  {
    title: "Innovation Velocity",
    description:
      "Rapid prototyping, tight feedback loops, and pragmatic engineering to ship faster—without cutting corners.",
    accent: "emerald",
  },
  {
    title: "Client-Centric Success",
    description:
      "We align to your constraints, communicate clearly, and optimize for long-term maintainability.",
    accent: "orange",
  },
];

function accent(accent: Value["accent"]) {
  switch (accent) {
    case "sky":
      return "from-sky-400/25 to-sky-500/5 ring-sky-400/15";
    case "fuchsia":
      return "from-fuchsia-400/25 to-fuchsia-500/5 ring-fuchsia-400/15";
    case "emerald":
      return "from-emerald-400/25 to-emerald-500/5 ring-emerald-400/15";
    case "orange":
      return "from-orange-400/25 to-orange-500/5 ring-orange-400/15";
  }
}

export function ValuesGrid() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Our Core Values
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/65 md:text-base">
          Principles that drive our work: clarity, craftsmanship, and security-first delivery.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div
            key={v.title}
            className={[
              "rounded-2xl border border-white/10 bg-black/20 p-6 ring-1",
              accent(v.accent),
            ].join(" ")}
          >
            <div className="text-base font-semibold text-white">{v.title}</div>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

