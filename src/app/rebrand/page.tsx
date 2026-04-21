import Link from "next/link";

export default function RebrandPage() {
  return (
    <div className="te-bg min-h-screen">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 te-grid opacity-35" />
        <main className="mx-auto flex max-w-4xl flex-col px-6 py-16 md:py-24">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <span className="text-[10px] font-semibold">↗</span>
              </span>
              Rebrand notice
            </div>

            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              You’re in the right place
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              Trust Engineers has rebranded to Kafu People.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              Don’t worry — you’re still working with the same team. We’ve just
              upgraded our brand to better reflect what we do today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://kafupeople.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,.18)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 active:translate-y-0"
              >
                Continue to KafuPeople.com <span className="ml-2 text-white/70">→</span>
              </a>
              <Link
                href="/#hero"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/8"
              >
                Go to homepage
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

