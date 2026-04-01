type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "We build complete web products, business platforms, internal tools, and scalable software systems from frontend to backend.",
  },
  {
    title: "Frontend Development",
    description:
      "We create modern, responsive interfaces with a strong focus on usability, maintainability, and product quality.",
  },
  {
    title: "Backend & API Development",
    description:
      "We design and build backend systems, APIs, integrations, authentication flows, and product logic that support reliable growth.",
  },
  {
    title: "AI Integration",
    description:
      "We help teams add practical AI-powered features and workflows into products where they create real value.",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "We provide ongoing engineering support for products that need steady improvements, fixes, updates, and dependable technical care over time.",
  },
];

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      {children}
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div className="text-base font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
    </div>
  );
}

export function CapabilitiesTabs() {
  return (
    <CardShell>
      <div className="px-6 pt-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          What we do
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65 md:text-base">
          We focus on the services we actively handle today, with strong
          attention to delivery quality and long-term support.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} />
        ))}
      </div>
    </CardShell>
  );
}

