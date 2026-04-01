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
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || isSending) return;

    setIsSending(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...state,
          // honeypot
          website: "",
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Message sent. We’ll reply soon.");
      setState(defaultState);
      setAgreed(false);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Could not send message right now. Please use email or WhatsApp instead.",
      );
    } finally {
      setIsSending(false);
    }
  }

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
          Let’s talk about your project
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
          If you have an idea, need development support, or are looking for a
          long-term software partner, we’d be glad to hear from you.
        </p>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-black/20 p-6"
        >
          <div className="text-sm font-semibold text-white/85">
            Contact form
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

          <div className="sr-only">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
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
            <button
              type="submit"
              disabled={!agreed || isSending}
              className={[
                "inline-flex flex-1 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition",
                agreed && !isSending
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 active:translate-y-0"
                  : "cursor-not-allowed bg-white/5 text-white/40",
              ].join(" ")}
            >
              {isSending ? "Sending…" : "Send message"}{" "}
              <span className="ml-2 text-white/70">→</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setState(defaultState);
                setAgreed(false);
                setStatus("idle");
                setStatusMessage("");
              }}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/8"
            >
              Reset
            </button>
          </div>

          {status !== "idle" ? (
            <div
              className={[
                "mt-4 rounded-xl border px-4 py-3 text-sm",
                status === "success"
                  ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-100/90"
                  : "border-rose-400/20 bg-rose-500/10 text-rose-100/90",
              ].join(" ")}
            >
              {statusMessage}
              {status === "error" ? (
                <>
                  {" "}
                  <a className="underline underline-offset-4" href={mailtoHref}>
                    Email us
                  </a>
                  .
                </>
              ) : null}
            </div>
          ) : null}
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold text-white/85">
              Contact options
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
                title="WhatsApp"
                subtitle="Message us anytime"
                value={
                  <a
                    className="text-sky-300 hover:text-sky-200"
                    href="https://wa.me/639515639379"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +63 9515639379
                  </a>
                }
              />
              <ContactCard
                title="Telegram"
                subtitle="Chat with our team"
                value={
                  <a
                    className="text-sky-300 hover:text-sky-200"
                    href="https://t.me/trustengineers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @trustengineers
                  </a>
                }
              />
              <ContactCard
                title="Book a call"
                subtitle="Schedule a conversation"
                value={
                  <a
                    className="text-sky-300 hover:text-sky-200"
                    href="https://cal.com/trustengineers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    cal.com/trustengineers
                  </a>
                }
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold text-white/85">Primary contact</div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white/85">
                Leomer Romero
              </div>
              <div className="mt-2 text-sm text-white/65">
                Ready to start immediately for the right project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

