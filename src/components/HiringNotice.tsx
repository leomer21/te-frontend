export function HiringNotice() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 py-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Focused on clients, not hiring right now
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65 md:text-base">
          TrustEngineers is currently focused on client delivery and long-term
          project partnerships. We are not hiring developers at the moment.
          Client inquiries and project opportunities are welcome.
        </p>
      </div>
    </div>
  );
}

