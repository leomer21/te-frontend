import Image from "next/image";
import Link from "next/link";

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

        <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050914]/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo.png"
                alt="TrustEngineers logo"
                width={170}
                height={42}
                priority
                className="h-9 w-auto"
              />
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#about">
                About
              </a>
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
                href="https://cal.com/trustengineers"
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,.25)] ring-1 ring-white/10 hover:from-sky-400 hover:to-indigo-400"
                href="#contact"
              >
                Start Your Project
                <span className="ml-2 text-white/70">→</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <Reveal className="text-center md:text-left">
                <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Your long-term development partner for turning ideas into real
                  products
                </h1>
                <p className="mt-5 text-pretty text-base leading-7 text-white/70 md:text-lg">
                  TrustEngineers helps startups, solo founders, and growing
                  businesses build and support software with experienced
                  developers who are ready to start immediately. We focus on
                  dependable execution, clear communication, and long-term
                  collaboration.
                </p>
                <div className="mt-8 flex flex-col items-center justify-start gap-3 sm:flex-row md:items-start">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,.18)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 hover:shadow-[0_22px_70px_rgba(59,130,246,.22)] active:translate-y-0 sm:w-auto"
                  >
                    Start Your Project{" "}
                    <span className="ml-2 text-white/70">→</span>
                  </a>
                  <a
                    href="https://cal.com/trustengineers"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition hover:-translate-y-0.5 hover:bg-white/8 active:translate-y-0 sm:w-auto"
                  >
                    Book a Call
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60 md:justify-start">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    5+ years of experience
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400/80" />
                    Ready to start immediately
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fuchsia-400/80" />
                    Confidentiality-first delivery
                  </span>
                </div>
              </Reveal>

              <Reveal className="hidden md:block">
                <HeroVisual />
              </Reveal>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-6xl px-6 py-10">
            <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Built on trust, delivery, and long-term support
              </h2>
              <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-white/65 md:text-base">
                <p>
                  TrustEngineers is a modern software development company focused
                  on helping clients move from idea to execution with confidence.
                  We work with founders, businesses, and overseas partners who
                  need reliable developers, steady progress, and a team they can
                  trust over the long term.
                </p>
                <p>
                  We are not built around one-off tasks alone. Our goal is to
                  become a dependable development partner that supports products
                  through build, iteration, and ongoing maintenance.
                </p>
              </div>
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
        </main>

        <footer className="border-t border-white/8 bg-black/20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/brand/logo.png"
                  alt="TrustEngineers logo"
                  width={190}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
                A long-term development partner helping startups, solo founders,
                and businesses build and support software with experienced
                developers, clear communication, and trusted delivery.
              </p>
              <div className="mt-4 text-sm text-white/65">
                <div>+1 (864) 800-6724</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 md:col-span-2 md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-white/85">
                  Quick Links
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  <li>
                    <a className="hover:text-white" href="#about">
                      About
                    </a>
                  </li>
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
                    <a className="hover:text-white" href="#why-us">
                      Why Us
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
                <div className="text-sm font-semibold text-white/85">
                  Services
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  <li>Full-Stack Development</li>
                  <li>Frontend Development</li>
                  <li>Backend & API Development</li>
                  <li>AI Integration</li>
                  <li>Maintenance & Long-Term Support</li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold text-white/85">
                  Company
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  <li>
                    <a className="hover:text-white" href="#why-us">
                      Why TrustEngineers
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#contact">
                      Get in touch
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

          <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/45">
            © {new Date().getFullYear()} TrustEngineers. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
