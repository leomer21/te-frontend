import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-r from-sky-500/20 via-indigo-500/15 to-fuchsia-500/20 blur-2xl" />
      <div className="relative te-tilt te-glow overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
        <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_20%_20%,rgba(56,189,248,.18),transparent_60%),radial-gradient(600px_280px_at_80%_30%,rgba(168,85,247,.16),transparent_60%),radial-gradient(500px_240px_at_45%_90%,rgba(34,197,94,.10),transparent_60%)]" />
        <div className="relative p-4">
          <Image
            src="/visuals/hero-orbit.svg"
            alt="Abstract orbit illustration"
            width={1200}
            height={900}
            priority
            className="h-auto w-full rounded-2xl opacity-95"
          />
        </div>
      </div>
    </div>
  );
}

