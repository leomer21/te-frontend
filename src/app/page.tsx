import Image from "next/image";
import Link from "next/link";

import { CapabilitiesTabs } from "@/components/CapabilitiesTabs";
import { ContactSection } from "@/components/ContactSection";
import { IndustrySelector } from "@/components/IndustrySelector";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { StatsStrip } from "@/components/StatsStrip";
import { ValuesGrid } from "@/components/ValuesGrid";
import { TalentGrid } from "@/components/TalentGrid";
import { DevelopmentLifecycle } from "@/components/DevelopmentLifecycle";

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
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#industries">
                Industries
              </a>
              <a className="hover:text-white" href="#work">
                Work
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
                Join Us
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,.25)] ring-1 ring-white/10 hover:from-sky-400 hover:to-indigo-400"
                href="#contact"
              >
                Contact Us
                <span className="ml-2 text-white/70">→</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <span className="text-[10px] font-semibold">⚙</span>
                </span>
                Our Capabilities
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Engineering the{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Future of AI
                </span>
              </h1>
              <p className="mt-5 text-pretty text-base leading-7 text-white/70 md:text-lg">
                We build secure, scalable software and IT systems—cloud,
                automation, and intelligent applications—so teams ship faster
                with confidence.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,.18)] ring-1 ring-white/10 hover:from-sky-400 hover:to-indigo-400 sm:w-auto"
                >
                  Start Your Project <span className="ml-2 text-white/70">→</span>
                </a>
                <a
                  href="#work"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 sm:w-auto"
                >
                  View Our Work
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  Available 24/7
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400/80" />
                  Security-first delivery
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400/80" />
                  Free consultation
                </span>
              </div>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-6xl px-6 py-10">
            <CapabilitiesTabs />
          </section>

          <section id="industries" className="mx-auto max-w-6xl px-6 py-10">
            <IndustrySelector />
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <StatsStrip />
          </section>

          <section id="work" className="mx-auto max-w-6xl px-6 py-10">
            <ProjectsGrid />
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <DevelopmentLifecycle />
          </section>

          <section id="why-us" className="mx-auto max-w-6xl px-6 py-10">
            <ValuesGrid />
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <TalentGrid />
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
            <ContactSection />
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
                A premium engineering company building intelligent, secure SaaS,
                automation, and custom applications for teams that demand
                reliability.
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
                    <a className="hover:text-white" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#industries">
                      Industries
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#work">
                      Work
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
                  <li>Custom Software Engineering</li>
                  <li>AI-Powered SaaS</li>
                  <li>Cloud & DevOps</li>
                  <li>Data & Analytics</li>
                  <li>Security & Compliance</li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold text-white/85">
                  Company
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  <li>
                    <a className="hover:text-white" href="#why-us">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#contact">
                      Get in touch
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#contact">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#contact">
                      Terms & Conditions
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
