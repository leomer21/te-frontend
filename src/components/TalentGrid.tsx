type Talent = {
  title: string;
  description: string;
  chips: string[];
};

const talents: Talent[] = [
  {
    title: "AI/ML Engineers",
    description:
      "Applied ML, production deployment, and evaluation—built for reliability and measurable impact.",
    chips: ["RAG", "MLOps", "NLP", "Computer Vision"],
  },
  {
    title: "Full-Stack Architects",
    description:
      "Scalable systems, clean APIs, and modern web/mobile experiences with security baked in.",
    chips: ["Cloud", "Microservices", "DevOps", "Security"],
  },
  {
    title: "UI/UX Visionaries",
    description:
      "Interfaces that convert—grounded in research, accessibility, and performance constraints.",
    chips: ["Design Systems", "User Research", "Prototyping", "A/B Testing"],
  },
  {
    title: "Project Management Pros",
    description:
      "Clear communication, risk management, and delivery discipline to keep work predictable.",
    chips: ["Agile", "Roadmapping", "Stakeholders", "QA"],
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
      {children}
    </span>
  );
}

export function TalentGrid() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          World-Class Talent
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/65 md:text-base">
          A curated team built to deliver production systems—fast, secure, and maintainable.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        {talents.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-white/10 bg-black/20 p-6"
          >
            <div className="text-base font-semibold text-white">{t.title}</div>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {t.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

