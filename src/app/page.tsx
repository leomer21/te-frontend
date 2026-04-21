import Image from "next/image";

import { CapabilitiesTabs } from "@/components/CapabilitiesTabs";
import { ConfidentialitySection } from "@/components/ConfidentialitySection";
import { ContactSection } from "@/components/ContactSection";
import { IndustrySelector } from "@/components/IndustrySelector";
import { HiringNotice } from "@/components/HiringNotice";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ValuesGrid } from "@/components/ValuesGrid";
import { DevelopmentLifecycle } from "@/components/DevelopmentLifecycle";
import { TeamCultureSection } from "@/components/TeamCultureSection";
import { TeamSection } from "@/components/TeamSection";
import { Reveal } from "@/components/Reveal";
import { HeroVisual } from "@/components/HeroVisual";

export default function Home() {
  return (
    <div className="te-bg min-h-screen">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 te-grid opacity-35" />

        <div className="sticky top-0 z-50">
          <div className="border-b border-black/15 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 text-sm">
              <div className="min-w-0 truncate font-semibold text-black/90">
                Trust Engineers is now Kafu People — same team, expanded vision.
              </div>
              <a
                className="shrink-0 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-yellow-200 shadow-sm transition hover:bg-black/90"
                href="https://kafupeople.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit kafupeople.com →
              </a>
            </div>
          </div>

          <header className="border-b border-white/8 bg-[#050914]/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a
                href="#hero"
                className="flex items-center gap-2 outline-none ring-sky-400/40 focus-visible:ring-2"
                aria-label="Back to top"
              >
                <Image
                  src="/brand/logo.png"
                  alt="Trust Engineers logo"
                  width={200}
                  height={49}
                  priority
                  className="h-11 w-auto"
                />
              </a>

              <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
                <a className="hover:text-white" href="#services">
                  Services
                </a>
                <a className="hover:text-white" href="#process">
                  Process
                </a>
                <a className="hover:text-white" href="#team">
                  Team
                </a>
                <a className="hover:text-white" href="#why-us">
                  Why Us
                </a>
                <a className="hover:text-white" href="#contact">
                  Contact
                </a>
              </nav>

            <div className="flex items-center gap-3">
              <a
                className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/8 md:inline-flex"
                href="#contact"
              >
                Contact
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,.25)] ring-1 ring-white/10 hover:from-sky-400 hover:to-indigo-400"
                href="https://kafupeople.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit KafuPeople.com
                <span className="ml-2 text-white/70">→</span>
              </a>
            </div>
          </div>
        </header>
        </div>

        <main>
          <section
            id="hero"
            className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24"
          >
            <div className="grid items-center gap-10 md:grid-cols-2">
              <Reveal className="text-center md:text-left">
                <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Kafu People (formerly Trust Engineers)
                </h1>
                <p className="mt-5 text-pretty text-base leading-7 text-white/70 md:text-lg">
                  We’re the same team you trust — now with a broader vision and
                  stronger foundation.
                </p>
                <div className="mt-8 flex flex-col items-center justify-start gap-3 sm:flex-row md:items-start">
                  <a
                    href="https://kafupeople.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,.18)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 hover:shadow-[0_22px_70px_rgba(59,130,246,.22)] active:translate-y-0 sm:w-auto"
                  >
                    Visit KafuPeople.com{" "}
                    <span className="ml-2 text-white/70">→</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition hover:-translate-y-0.5 hover:bg-white/8 active:translate-y-0 sm:w-auto"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="mt-10 text-sm text-white/60">
                  Trust Engineers is now Kafu People — same team, expanded vision.
                </div>
              </Reveal>

              <Reveal className="hidden md:block">
                <HeroVisual />
              </Reveal>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
                We’ve evolved
              </h2>
              <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-white/65 md:text-base">
                <p>Trust Engineers is now operating as Kafu People.</p>
                <p>
                  This change reflects our growth, expanded services, and
                  long-term vision.
                </p>
                <p>
                  While our name has changed, our commitment to quality,
                  reliability, and results remains exactly the same.
                </p>
              </div>
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Same team. Same values.
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/65 md:text-base">
                You’re still working with the same people, processes, and
                standards you’ve come to trust. Only our name has changed —
                everything else continues to improve.
              </p>
            </Reveal>
          </section>

          <section id="services" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <CapabilitiesTabs />
            </Reveal>
          </section>

          <section id="who-we-work-with" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <IndustrySelector />
            </Reveal>
          </section>

          <section id="technologies" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <ProjectsGrid />
            </Reveal>
          </section>

          <section id="process" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <DevelopmentLifecycle />
            </Reveal>
          </section>

          <section id="why-us" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <ValuesGrid />
            </Reveal>
          </section>

          <section id="confidentiality" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <ConfidentialitySection />
            </Reveal>
          </section>

          <section id="team" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <TeamSection />
            </Reveal>
          </section>

          <section id="culture" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal>
              <TeamCultureSection />
            </Reveal>
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
            <Reveal>
              <ContactSection />
            </Reveal>
          </section>

          <section id="hiring" className="mx-auto max-w-6xl px-6 pb-16 pt-0">
            <Reveal>
              <HiringNotice />
            </Reveal>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16 pt-0">
            <Reveal className="rounded-2xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="text-sm font-semibold text-white/85">
                    Visit our new official website
                  </div>
                  <div className="mt-1 text-sm text-white/65">
                    kafupeople.com
                  </div>
                </div>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 active:translate-y-0"
                  href="https://kafupeople.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit KafuPeople.com <span className="ml-2 text-white/70">→</span>
                </a>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="border-t border-white/8 bg-black/20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
            <div>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 outline-none ring-sky-400/40 focus-visible:ring-2"
                aria-label="Back to top"
              >
                <Image
                  src="/brand/logo.png"
                  alt="Trust Engineers logo"
                  width={228}
                  height={56}
                  className="h-12 w-auto"
                />
              </a>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
                Trust Engineers is now Kafu People. All services are provided
                under kafupeople.com.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="text-sm font-semibold text-white/85">
                New official website
              </div>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-10">
                <div>
                  <a
                    className="text-sm text-sky-200 hover:text-sky-100"
                    href="https://kafupeople.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    kafupeople.com →
                  </a>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-white/55">
                    LinkedIn
                  </div>
                  <a
                    className="mt-1 block text-sm text-sky-200 hover:text-sky-100"
                    href="https://www.linkedin.com/company/kafu-people"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kafu People on LinkedIn →
                  </a>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-10 text-sm text-white/65 md:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-white/85">On this page</div>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a className="hover:text-white" href="#services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white" href="#process">
                        Process
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white" href="#team">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/85">More</div>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a className="hover:text-white" href="#technologies">
                        Technologies
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white" href="#why-us">
                        Why us
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white" href="#confidentiality">
                        Confidentiality
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white" href="#hiring">
                        Hiring notice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/45">
            © {new Date().getFullYear()} Trust Engineers. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
