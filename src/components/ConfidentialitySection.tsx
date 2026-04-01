export function ConfidentialitySection() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 py-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Confidentiality comes first
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65 md:text-base">
          We keep all client information private and do not publicly display
          client names, internal details, or sensitive project materials. If
          appropriate, selected references may be shared privately during
          serious discussions.
        </p>
      </div>
    </div>
  );
}

