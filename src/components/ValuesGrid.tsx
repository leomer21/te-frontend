type Value = {
  title: string;
  description: string;
  accent: "sky" | "fuchsia" | "emerald" | "orange" | "amber";
};

const values: Value[] = [
  {
    title: "Long-term mindset",
    description:
      "We aim to build lasting working relationships through dependable delivery and steady support.",
    accent: "sky",
  },
  {
    title: "Ready to start",
    description:
      "Our team is prepared to begin quickly and contribute without unnecessary delay.",
    accent: "fuchsia",
  },
  {
    title: "Experienced developers",
    description:
      "We bring solid hands-on experience across modern product development and real delivery environments.",
    accent: "emerald",
  },
  {
    title: "Calm and clear communication",
    description:
      "We believe strong projects come from clear conversations, practical planning, and consistent follow-through.",
    accent: "orange",
  },
  {
    title: "Confidentiality first",
    description:
      "We treat client information as private and do not publicly share sensitive work without permission.",
    accent: "amber",
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
    case "amber":
      return "from-amber-400/25 to-amber-500/5 ring-amber-400/15";
  }
}

export function ValuesGrid() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Why clients choose TrustEngineers
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/65 md:text-base">
          Long-term collaboration, dependable execution, and calm communication.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
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

