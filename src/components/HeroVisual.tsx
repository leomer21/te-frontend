export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-r from-sky-500/20 via-indigo-500/15 to-fuchsia-500/20 blur-2xl" />
      <div className="relative te-tilt te-glow overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
        <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_20%_20%,rgba(56,189,248,.18),transparent_60%),radial-gradient(600px_280px_at_80%_30%,rgba(168,85,247,.16),transparent_60%),radial-gradient(500px_240px_at_45%_90%,rgba(34,197,94,.10),transparent_60%)]" />
        <div className="relative p-5">
          <svg
            viewBox="0 0 900 640"
            className="te-hero-float h-auto w-full rounded-2xl"
            role="img"
            aria-label="Trust illustration: shield with verified network"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="bg1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 230) rotate(90) scale(320)">
                <stop stopColor="#38BDF8" stopOpacity="0.45" />
                <stop offset="0.55" stopColor="#818CF8" stopOpacity="0.16" />
                <stop offset="1" stopColor="#050914" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="bg2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(560 420) rotate(90) scale(280)">
                <stop stopColor="#A855F7" stopOpacity="0.30" />
                <stop offset="1" stopColor="#050914" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="stroke" x1="120" y1="120" x2="780" y2="520" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="0.55" stopColor="#818CF8" stopOpacity="0.85" />
                <stop offset="1" stopColor="#A855F7" stopOpacity="0.8" />
              </linearGradient>
              <filter id="softBlur" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
              <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000" floodOpacity="0.35" />
              </filter>
            </defs>

            <rect width="900" height="640" rx="26" fill="url(#bg1)" />
            <rect width="900" height="640" rx="26" fill="url(#bg2)" />

            <g opacity="0.9" filter="url(#softBlur)">
              <circle cx="260" cy="220" r="22" fill="#38BDF8" fillOpacity="0.35" />
              <circle cx="650" cy="420" r="18" fill="#A855F7" fillOpacity="0.32" />
              <circle cx="600" cy="200" r="14" fill="#818CF8" fillOpacity="0.30" />
              <circle cx="360" cy="460" r="12" fill="#22C55E" fillOpacity="0.18" />
            </g>

            <g className="te-hero-rotate" opacity="0.55">
              <ellipse cx="450" cy="330" rx="250" ry="160" fill="none" stroke="url(#stroke)" strokeWidth="2" strokeOpacity="0.45" />
              <ellipse cx="450" cy="330" rx="200" ry="125" fill="none" stroke="url(#stroke)" strokeWidth="2" strokeOpacity="0.28" />
              <circle cx="700" cy="330" r="6" fill="#38BDF8" fillOpacity="0.8" />
              <circle cx="250" cy="330" r="6" fill="#A855F7" fillOpacity="0.7" />
              <circle cx="450" cy="170" r="5" fill="#818CF8" fillOpacity="0.75" />
            </g>

            <g filter="url(#shadow)">
              <g className="te-hero-pulse">
                <circle cx="450" cy="330" r="140" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="2" />
                <circle cx="450" cy="330" r="118" fill="none" stroke="url(#stroke)" strokeOpacity="0.18" strokeWidth="2" />
              </g>

              <g>
                <path
                  d="M450 175c70 30 120 22 120 22v125c0 95-78 150-120 168-42-18-120-73-120-168V197s50 8 120-22Z"
                  fill="#070C1C"
                  stroke="white"
                  strokeOpacity="0.14"
                  strokeWidth="2"
                />
                <path
                  d="M450 205c56 24 92 18 92 18v92c0 73-59 116-92 131-33-15-92-58-92-131v-92s36 6 92-18Z"
                  fill="url(#bg1)"
                  opacity="0.55"
                />
                <path
                  d="M406 330l30 30 66-74"
                  fill="none"
                  stroke="#38BDF8"
                  strokeOpacity="0.95"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>

            <g opacity="0.55">
              <path d="M320 420c36-60 78-90 130-90 62 0 105 42 138 104" stroke="white" strokeOpacity="0.10" strokeWidth="2" fill="none" />
              <circle cx="320" cy="420" r="9" fill="#0B122A" stroke="white" strokeOpacity="0.12" />
              <circle cx="320" cy="420" r="4" fill="#22C55E" fillOpacity="0.6" />
              <circle cx="588" cy="434" r="9" fill="#0B122A" stroke="white" strokeOpacity="0.12" />
              <circle cx="588" cy="434" r="4" fill="#38BDF8" fillOpacity="0.75" />
            </g>

            <g opacity="0.18">
              <path d="M90 550H810" stroke="white" />
              <path d="M90 100H810" stroke="white" />
              <path d="M90 100V550" stroke="white" />
              <path d="M810 100V550" stroke="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

