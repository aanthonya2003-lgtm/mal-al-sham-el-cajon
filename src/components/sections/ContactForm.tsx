"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xxxxxxxx";
  const [state, handleSubmit] = useForm(formId);
  const [touched, setTouched] = useState(false);

  if (state.succeeded) {
    return (
      <div className="rounded-[14px] border border-[hsl(38_60%_35%)] bg-[hsl(25_12%_10%)] p-8 text-center">
        <CheckCircle2
          className="mx-auto text-[hsl(38_85%_52%)]"
          size={32}
          aria-hidden
        />
        <h3 className="mt-4 font-[var(--font-display)] text-2xl">
          Message received.
        </h3>
        <p className="mt-3 text-sm text-[hsl(35_10%_58%)]">
          We'll reply within the same business day. For something urgent,
          give us a ring at (619) 401-1055.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[10px] border border-[hsl(30_15%_18%)] bg-[hsl(25_15%_6%)] px-4 py-3 text-base text-[hsl(38_15%_93%)] placeholder:text-[hsl(35_10%_58%)] transition-colors focus:border-[hsl(38_85%_52%)] focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setTouched(true)}
      className="grid gap-4"
      aria-label="Send Mal Al Sham a message"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
            className="text-xs text-red-400"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
          Phone (optional)
        </span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
          Subject
        </span>
        <select name="subject" defaultValue="general" className={inputClass}>
          <option value="general">General question</option>
          <option value="catering">Catering inquiry</option>
          <option value="reservation">Large party / private booking</option>
          <option value="feedback">Feedback</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
          Message
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          className={inputClass + " resize-y min-h-[140px]"}
        />
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="text-xs text-red-400"
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <button
        type="submit"
        disabled={state.submitting || !touched}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-7 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? (
          <>
            <Loader2 size={14} aria-hidden className="animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>

      {formId === "xxxxxxxx" ? (
        <p className="text-xs text-[hsl(35_10%_58%)]">
          Form not yet wired — set <code>NEXT_PUBLIC_FORMSPREE_ID</code> in your
          environment to activate.
        </p>
      ) : null}
    </form>
  );
}
