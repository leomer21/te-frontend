type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    name: "Leomer Romero",
    role: "Co-Founder",
    bio: "Leomer helps lead TrustEngineers with a focus on long-term client relationships, dependable software delivery, and steady project execution. He works closely on direction, coordination, and making sure every engagement moves forward with clarity and trust.",
  },
  {
    name: "Yuliia Voichenko",
    role: "Recruiter",
    bio: "Yuliia supports team coordination and helps connect the right people to the right delivery needs. She focuses on responsiveness, communication, and helping projects stay smooth as they grow.",
  },
  {
    name: "Matheus Serra Azevedo",
    role: "Business Development",
    bio: "Matheus helps create new business relationships and supports conversations with potential partners and clients. He focuses on understanding client needs and helping build long-term collaboration.",
  },
  {
    name: "Reynaldo Cooper",
    role: "Customer Success",
    bio: "Reynaldo supports communication throughout ongoing engagements and helps maintain a positive client experience. He focuses on responsiveness, clarity, and keeping collaboration aligned with project needs.",
  },
];

function PersonCard({ name, role, bio }: TeamMember) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div className="text-base font-semibold text-white">{name}</div>
      <div className="mt-1 text-sm font-medium text-white/70">{role}</div>
      <p className="mt-3 text-sm leading-6 text-white/65">{bio}</p>
    </div>
  );
}

export function TeamSection() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          The people behind TrustEngineers
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 text-white/65 md:text-base">
          We believe trust starts with people. Our team combines technical
          delivery, communication, and coordination to support long-term client
          relationships in a calm, modern, and professional way.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        {team.map((m) => (
          <PersonCard key={m.name} {...m} />
        ))}
      </div>
    </div>
  );
}

