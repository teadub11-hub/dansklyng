import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/partner/apply")({
  head: () => ({
    meta: [{ title: "Partnership enquiry — Dansk Lyng" }],
  }),
  component: ApplyPage,
});

const DRAFT_KEY = "dansk-lyng-enquiry";

type Draft = {
  company: string;
  country: string;
  type: string;
  volume: string;
  channels: string;
  message: string;
  name: string;
  email: string;
  phone: string;
};

const empty: Draft = {
  company: "",
  country: "",
  type: "",
  volume: "",
  channels: "",
  message: "",
  name: "",
  email: "",
  phone: "",
};

function ApplyPage() {
  const t = useT();
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<Draft>(empty);
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (raw) {
      try {
        setDraft({ ...empty, ...JSON.parse(raw) });
      } catch {
        /* ignore */
      }
    }
  }, []);

  function patch(partial: Partial<Draft>) {
    setDraft((d) => {
      const next = { ...d, ...partial };
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(next));
      setSaved(true);
      return next;
    });
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const existing = JSON.parse(window.localStorage.getItem("dansk-lyng-enquiries") || "[]") as Draft[];
    existing.push({ ...draft });
    window.localStorage.setItem("dansk-lyng-enquiries", JSON.stringify(existing));
    window.localStorage.removeItem(DRAFT_KEY);
    setDone(true);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 sm:px-6">
        <p className="text-xs tracking-widest text-muted uppercase">{t.applyTitle}</p>
        <h1 className="mt-4 font-display text-5xl text-ink">{t.applyDoneTitle}</h1>
        <p className="mt-6 text-ink-soft">{t.applyDoneBody}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/journal" className="inline-flex min-h-11 items-center text-sm">
            {t.homeAllNotes} →
          </Link>
          <Link to="/" className="inline-flex min-h-11 items-center text-sm text-ink-soft">
            Dansk Lyng
          </Link>
        </div>
      </div>
    );
  }

  const types = [
    ["importer", t.typeImporter],
    ["distributor", t.typeDistributor],
    ["retail", t.typeRetail],
    ["horeca", t.typeHoreca],
    ["other", t.typeOther],
  ] as const;

  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
      <p className="text-xs tracking-widest text-muted uppercase">{t.applyTitle}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{t.partnerTitle}</h1>
      <p className="mt-4 text-ink-soft">{t.applyLede}</p>

      <ol className="mt-10 flex gap-4 text-xs tracking-widest uppercase">
        {[t.applyStepCompany, t.applyStepNeeds, t.applyStepContact].map((label, i) => (
          <li
            key={label}
            className={cn(i + 1 === step ? "text-ink" : "text-muted", "flex items-center gap-2")}
          >
            <span className="tabular-nums">0{i + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      {saved ? <p className="mt-3 text-xs text-heather">{t.applyDraft}</p> : null}

      <form onSubmit={submit} className="mt-10 space-y-6">
        {step === 1 ? (
          <>
            <Field label={t.applyCompany} value={draft.company} onChange={(v) => patch({ company: v })} required />
            <Field label={t.applyCountry} value={draft.country} onChange={(v) => patch({ country: v })} required />
            <label className="block">
              <span className="text-xs tracking-widest text-muted uppercase">{t.applyType}</span>
              <select
                required
                value={draft.type}
                onChange={(e) => patch({ type: e.target.value })}
                className="mt-2 min-h-11 w-full border border-line bg-parchment px-3 text-sm outline-none focus:border-ink"
              >
                <option value="">{t.applyTypePh}</option>
                {types.map(([v, label]) => (
                  <option key={v} value={v}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!draft.company || !draft.country || !draft.type}
              className="min-h-11 bg-heath px-6 text-xs tracking-widest text-cream uppercase disabled:opacity-40"
            >
              {t.applyContinue}
            </button>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <Field label={t.applyVolume} value={draft.volume} onChange={(v) => patch({ volume: v })} />
            <Field label={t.applyChannels} value={draft.channels} onChange={(v) => patch({ channels: v })} />
            <label className="block">
              <span className="text-xs tracking-widest text-muted uppercase">{t.applyMessage}</span>
              <textarea
                rows={5}
                value={draft.message}
                onChange={(e) => patch({ message: e.target.value })}
                className="mt-2 w-full border border-line bg-parchment px-3 py-3 text-sm outline-none focus:border-ink"
              />
            </label>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="min-h-11 px-4 text-sm text-ink-soft">
                {t.applyBack}
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="min-h-11 bg-heath px-6 text-xs tracking-widest text-cream uppercase"
              >
                {t.applyContinue}
              </button>
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <Field label={t.applyName} value={draft.name} onChange={(v) => patch({ name: v })} required />
            <Field
              label={t.applyEmail}
              value={draft.email}
              onChange={(v) => patch({ email: v })}
              required
              type="email"
            />
            <Field label={t.applyPhone} value={draft.phone} onChange={(v) => patch({ phone: v })} type="tel" />
            <p className="text-xs text-muted">{t.applyPrivacy}</p>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="min-h-11 px-4 text-sm text-ink-soft">
                {t.applyBack}
              </button>
              <button
                type="submit"
                className="min-h-11 bg-heath px-6 text-xs tracking-widest text-cream uppercase transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                {t.applySubmit}
              </button>
            </div>
          </>
        ) : null}
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest text-muted uppercase">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-11 w-full border border-line bg-parchment px-3 text-sm outline-none focus:border-ink"
      />
    </label>
  );
}
