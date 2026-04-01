type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { value: "$1B+", label: "Revenue Generated" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "15+", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
];

export function StatsStrip() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs font-medium tracking-wide text-white/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

