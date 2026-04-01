const technologies = [
  "Node.js",
  "React",
  "TypeScript",
  "Next.js",
  "Ruby on Rails",
  "Python",
  "C#",
  "Java",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "AI/ML integrations",
] as const;

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
              Core Technologies
            </div>
            <h2 className="mt-4 text-balance text-xl font-semibold tracking-tight text-white md:text-2xl">
              Technologies we work with
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
              Node.js, React, TypeScript, Next.js, Ruby on Rails, Python, C#,
              Java, PostgreSQL, MongoDB, REST APIs, and AI/ML integrations.
            </p>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

