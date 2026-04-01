type Step = {
  n: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    n: "1",
    title: "Discovery",
    description: "We learn about your idea, goals, timeline, and priorities.",
  },
  {
    n: "2",
    title: "Planning",
    description:
      "We turn requirements into a practical development path with clear direction.",
  },
  {
    n: "3",
    title: "Build",
    description:
      "We execute with steady progress, clear communication, and reliable technical delivery.",
  },
  {
    n: "4",
    title: "Support",
    description:
      "We continue to improve, maintain, and support the product when long-term collaboration is needed.",
  },
];

export function DevelopmentLifecycle() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          How we work
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/65 md:text-base">
          A simple, practical process designed for steady progress and long-term support.
        </p>
      </div>

      <div className="relative px-6 pb-6 pt-10">
        <div className="absolute inset-x-6 top-10 hidden h-[1px] bg-white/10 md:block" />

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-200 ring-1 ring-sky-400/20">
                  {s.n}
                </span>
                <div className="text-sm font-semibold text-white/90">
                  {s.title}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

