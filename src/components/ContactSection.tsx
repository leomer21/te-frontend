"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "Project inquiry",
  message: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold tracking-wide text-white/70">
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none",
        "focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/15",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none",
        "focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/15",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

function ContactCard({
  title,
  subtitle,
  value,
}: {
  title: string;
  subtitle: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="text-sm font-semibold text-white/85">{title}</div>
      <div className="mt-1 text-xs text-white/55">{subtitle}</div>
      <div className="mt-3 text-sm text-white/80">{value}</div>
    </div>
  );
}

export function ContactSection() {
  const [state, setState] = useState<FormState>(defaultState);
  const [agreed, setAgreed] = useState(false);

  const mailtoHref = useMemo(() => {
    const to = "contact@trustengineers.space";
    const subject = state.subject || "Project inquiry";
    const body = [
      `Name: ${state.name || "-"}`,
      `Email: ${state.email || "-"}`,
      `Company: ${state.company || "-"}`,
      "",
      state.message || "",
    ].join("\n");
    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [state]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,.35)] ring-1 ring-white/5">
      <div className="px-6 pt-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
            <span className="text-[10px] font-semibold">✉</span>
          </span>
          Contact Us
        </div>
        <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Let’s build your AI future
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
          Tell us what you’re building. We’ll reply with next steps, timelines,
          and a clear plan.
        </p>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-sm font-semibold text-white/85">
            Send us a message
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <FieldLabel>Full name</FieldLabel>
              <Input
                value={state.name}
                onChange={(e) =>
                  setState((s) => ({ ...s, name: e.target.value }))
                }
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>
            <div>
              <FieldLabel>Email</FieldLabel>
              <Input
                value={state.email}
                onChange={(e) =>
                  setState((s) => ({ ...s, email: e.target.value }))
                }
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div>
              <FieldLabel>Company</FieldLabel>
              <Input
                value={state.company}
                onChange={(e) =>
                  setState((s) => ({ ...s, company: e.target.value }))
                }
                placeholder="Your Company"
                autoComplete="organization"
              />
            </div>
            <div>
              <FieldLabel>Subject</FieldLabel>
              <Input
                value={state.subject}
                onChange={(e) =>
                  setState((s) => ({ ...s, subject: e.target.value }))
                }
                placeholder="Project inquiry"
              />
            </div>
            <div className="md:col-span-2">
              <FieldLabel>Message</FieldLabel>
              <Textarea
                value={state.message}
                onChange={(e) =>
                  setState((s) => ({ ...s, message: e.target.value }))
                }
                placeholder="Share your goals, timeline, and any constraints (security, compliance, scale)…"
                rows={5}
              />
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <input
              id="agree"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-black/25 text-sky-400"
            />
            <label htmlFor="agree" className="text-xs leading-5 text-white/60">
              I agree to the Terms & Conditions and Privacy Policy.
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              aria-disabled={!agreed}
              href={agreed ? mailtoHref : undefined}
              onClick={(e) => {
                if (!agreed) e.preventDefault();
              }}
              className={[
                "inline-flex flex-1 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10",
                agreed
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400"
                  : "cursor-not-allowed bg-white/5 text-white/40",
              ].join(" ")}
            >
              Send message <span className="ml-2 text-white/70">→</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setState(defaultState);
                setAgreed(false);
              }}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/8"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold text-white/85">
              Contact information
            </div>
            <div className="mt-4 grid gap-3">
              <ContactCard
                title="Email"
                subtitle="We reply quickly"
                value={
                  <a
                    className="text-sky-300 hover:text-sky-200"
                    href="mailto:contact@trustengineers.space"
                  >
                    contact@trustengineers.space
                  </a>
                }
              />
              <ContactCard
                title="Phone"
                subtitle="Mon–Fri, business hours"
                value={
                  <a
                    className="text-sky-300 hover:text-sky-200"
                    href="tel:+18648006724"
                  >
                    +1 (864) 800-6724
                  </a>
                }
              />
              <ContactCard
                title="Operations"
                subtitle="Remote-first team"
                value={<span className="text-white/75">Global</span>}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold text-white/85">Why choose us?</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20">
                  <span className="text-[12px] text-emerald-300">✓</span>
                </span>
                Security-first engineering and clear documentation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20">
                  <span className="text-[12px] text-emerald-300">✓</span>
                </span>
                Transparent communication and delivery metrics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20">
                  <span className="text-[12px] text-emerald-300">✓</span>
                </span>
                Production-ready builds with observability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

