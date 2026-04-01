type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "We build complete web products, business platforms, internal tools, and scalable software systems from frontend to backend.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 7.5C4 6.12 5.12 5 6.5 5h11C18.88 5 20 6.12 20 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 19 4 17.88 4 16.5v-9Z"
          stroke="currentColor"
          strokeOpacity="0.9"
          strokeWidth="1.5"
        />
        <path
          d="M7 9h10M7 12h6M7 15h8"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Frontend Development",
    description:
      "We create modern, responsive interfaces with a strong focus on usability, maintainability, and product quality.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.5 6.5h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13C4.67 17.5 4 16.83 4 16V8c0-.83.67-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeOpacity="0.9"
          strokeWidth="1.5"
        />
        <path
          d="M8 20h8"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.5 10.5h4m-4 3h8"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Backend & API Development",
    description:
      "We design and build backend systems, APIs, integrations, authentication flows, and product logic that support reliable growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 7.5c0-1.38 1.12-2.5 2.5-2.5h5C15.88 5 17 6.12 17 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-5C8.12 19 7 17.88 7 16.5v-9Z"
          stroke="currentColor"
          strokeOpacity="0.9"
          strokeWidth="1.5"
        />
        <path
          d="M5 9h2M5 12h2M5 15h2M17 9h2M17 12h2M17 15h2"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "We help teams add practical AI-powered features and workflows into products where they create real value.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 3.75c2.6 0 4.7 2.1 4.7 4.7 0 1.1-.39 2.1-1.04 2.9.92.52 1.54 1.5 1.54 2.63 0 1.66-1.34 3-3 3H9.8c-1.66 0-3-1.34-3-3 0-1.13.62-2.11 1.54-2.63A4.67 4.67 0 0 1 7.3 8.45c0-2.6 2.1-4.7 4.7-4.7Z"
          stroke="currentColor"
          strokeOpacity="0.9"
          strokeWidth="1.5"
        />
        <path
          d="M9.2 21h5.6"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 10.5h4M10 13.5h4"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "We provide ongoing engineering support for products that need steady improvements, fixes, updates, and dependable technical care over time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 4a8 8 0 1 0 8 8"
          stroke="currentColor"
          strokeOpacity="0.9"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 4v6h-6"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="te-tilt rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-white/15 hover:bg-black/25">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky-200 ring-1 ring-white/5">
          {icon}
        </span>
        <div className="text-base font-semibold text-white">{title}</div>
      </div>
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
          <ServiceCard
            key={s.title}
            title={s.title}
            description={s.description}
            icon={s.icon}
          />
        ))}
      </div>
    </CardShell>
  );
}

