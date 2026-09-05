import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { products } from "@/lib/content";
import { submitEnquiry } from "@/lib/enquiry";
import { useLang, useT } from "@/lib/i18n";
import { uiHead } from "@/lib/seo";
import { SolidLink } from "@/components/site-shell";

export const Route = createFileRoute("/$lang/partner/apply")({
  head: ({ params }) => uiHead(params.lang, "/partner/apply", "seoApplyTitle", "seoApplyDesc"),
  component: ApplyPage,
});

const DRAFT_KEY = "dansk-lyng-enquiry";

type Draft = {
  company: string;
  name: string;
  email: string;
  country: string;
  type: string;
  interest: string[];
  message: string;
};

const empty: Draft = {
  company: "",
  name: "",
  email: "",
  country: "",
  type: "",
  interest: [],
  message: "",
};

function ApplyPage() {
  const t = useT();
  const { lang } = useLang();
  const [draft, setDraft] = useState<Draft>(empty);
  const [website, setWebsite] = useState("");
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Partial<Draft>;
        setDraft({
          ...empty,
          ...parsed,
          interest: Array.isArray(parsed.interest) ? parsed.interest : [],
        });
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

  function toggleInterest(slug: string) {
    const next = draft.interest.includes(slug)
      ? draft.interest.filter((s) => s !== slug)
      : [...draft.interest, slug];
    patch({ interest: next });
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await submitEnquiry({
        data: {
          ...draft,
          website,
        },
      });
      window.localStorage.removeItem(DRAFT_KEY);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const types = [
    ["importer", t.typeImporter],
    ["distributor", t.typeDistributor],
    ["retail", t.typeRetail],
    ["horeca", t.typeHoreca],
    ["other", t.typeOther],
  ] as const;

  if (status === "done") {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
        <p className="text-xs tracking-widest text-muted uppercase">{t.partnerEyebrow}</p>
        <h1 className="mt-3 font-display text-5xl text-ink">{t.applyDoneTitle}</h1>
        <p className="mt-4 text-ink-soft">{t.applyDoneBody}</p>
        <div className="mt-10">
          <SolidLink to="/products">{t.ctaCatalog}</SolidLink>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
      <p className="text-xs tracking-widest text-muted uppercase">{t.partnerEyebrow}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{t.applyTitle}</h1>
      <p className="mt-4 text-ink-soft">{t.applyLede}</p>
      {saved ? <p className="mt-3 text-xs text-heather">{t.applyDraft}</p> : null}

      <form onSubmit={submit} className="mt-10 space-y-6">
        <Field label={t.applyCompany} value={draft.company} onChange={(v) => patch({ company: v })} required />
        <Field label={t.applyName} value={draft.name} onChange={(v) => patch({ name: v })} required />
        <Field
          label={t.applyEmail}
          value={draft.email}
          onChange={(v) => patch({ email: v })}
          required
          type="email"
        />
        <Field label={t.applyCountry} value={draft.country} onChange={(v) => patch({ country: v })} required />
        <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <span>Website</span>
          <input
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-xs tracking-widest text-muted uppercase">{t.applyType}</span>
          <select
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
        <fieldset>
          <legend className="text-xs tracking-widest text-muted uppercase">{t.applyProducts}</legend>
          <ul className="mt-3 space-y-1">
            {products.map((p) => (
              <li key={p.slug}>
                <label className="flex min-h-11 items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={draft.interest.includes(p.slug)}
                    onChange={() => toggleInterest(p.slug)}
                    className="size-4 accent-heath"
                  />
                  <span>{p.name[lang]}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <label className="block">
          <span className="text-xs tracking-widest text-muted uppercase">{t.applyMessage}</span>
          <textarea
            rows={5}
            value={draft.message}
            onChange={(e) => patch({ message: e.target.value })}
            className="mt-2 w-full border border-line bg-parchment px-3 py-3 text-sm outline-none focus:border-ink"
          />
        </label>
        <p className="text-xs text-muted">{t.applyPrivacy}</p>
        {status === "error" ? <p className="text-sm text-heather">{t.applyError}</p> : null}
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-11 bg-heath px-6 text-xs tracking-widest text-cream uppercase transition-transform duration-150 ease-out enabled:active:scale-[0.96] disabled:opacity-60"
        >
          {status === "sending" ? t.applySending : t.applySubmit}
        </button>
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
