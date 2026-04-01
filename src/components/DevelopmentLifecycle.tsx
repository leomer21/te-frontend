type Step = {
  n: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    n: "1",
    title: "Discovery & Strategy",
    description:
      "We align on goals, constraints, and success metrics—then map a delivery plan that reduces risk early.",
  },
  {
    n: "2",
    title: "Design & Prototyping",
    description:
      "UI/UX and technical prototypes validate assumptions quickly, before we invest in full build-out.",
  },
  {
    n: "3",
    title: "Agile Development",
    description:
      "Iterative sprints with clear demos, quality gates, and continuous integration for predictable progress.",
  },
  {
    n: "4",
    title: "Testing & Deployment",
    description:
      "Automated tests, security checks, and repeatable releases—so production is stable and observable.",
  },
  {
    n: "5",
    title: "Scale & Optimization",
    description:
      "We monitor performance, optimize costs, and evolve the system based on real usage and feedback.",
  },
];

export function DevelopmentLifecycle() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Our Development Lifecycle
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/65 md:text-base">
          A transparent, collaborative process designed for success—from
          initial concept to scalable deployment.
        </p>
      </div>

      <div className="relative px-6 pb-6 pt-10">
        <div className="absolute inset-x-6 top-10 hidden h-[1px] bg-white/10 md:block" />

        <div className="grid gap-4 md:grid-cols-5">
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

