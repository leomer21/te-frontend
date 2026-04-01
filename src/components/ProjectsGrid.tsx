type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Predictive Analytics SaaS",
    description:
      "A forecasting and insights platform with real-time pipelines, RBAC, and audit-ready reporting.",
    tags: ["Next.js", "Python", "AWS", "PostgreSQL"],
  },
  {
    title: "Automated Marketing Suite",
    description:
      "Lifecycle automation with segmentation, experimentation, and privacy-aware personalization.",
    tags: ["NestJS", "React", "REST API", "AWS"],
  },
  {
    title: "AI-Powered Mobile App",
    description:
      "A mobile experience with smart recommendations, secure auth, and analytics instrumentation.",
    tags: ["React Native", "Python", "MongoDB", "REST API"],
  },
  {
    title: "Intelligent E-commerce",
    description:
      "Dynamic pricing and fraud prevention with an event-driven architecture built for scale.",
    tags: ["TypeScript", "Kafka", "Redis", "GCP"],
  },
  {
    title: "Customer Data Platform",
    description:
      "Unified profiles and identity resolution with streaming ingestion and governance controls.",
    tags: ["Snowflake", "dbt", "Airflow", "Terraform"],
  },
  {
    title: "Logistics Optimization AI",
    description:
      "Route optimization and capacity planning with monitoring, explainability, and guardrails.",
    tags: ["Python", "OR-Tools", "Kubernetes", "Grafana"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
      {children}
    </span>
  );
}

export function ProjectsGrid() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <span className="text-[10px] font-semibold">✦</span>
              </span>
              Our Work
            </div>
            <h2 className="mt-4 text-balance text-xl font-semibold tracking-tight text-white md:text-2xl">
              Recent projects across AI, cloud, and automation
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
              A snapshot of what we build. Every engagement is security-first,
              production-grade, and designed to scale.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/8"
          >
            Start a conversation <span className="ml-2 text-white/70">→</span>
          </a>
        </div>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-white/15 hover:bg-black/25"
          >
            <div className="text-base font-semibold text-white">{p.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/65">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

