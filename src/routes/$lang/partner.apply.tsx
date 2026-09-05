import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { EMAIL, products } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { uiHead } from "@/lib/seo";

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
  const [saved, setSaved] = useState(false);
  const [mailed, setMailed] = useState(false);

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

  function submit(e: FormEvent) {
    e.preventDefault();
    const chosen = products
      .filter((p) => draft.interest.includes(p.slug))
      .map((p) => p.name[lang])
      .join(", ");
    const typeLabel =
      draft.type === "importer"
        ? t.typeImporter
        : draft.type === "distributor"
          ? t.typeDistributor
          : draft.type === "retail"
            ? t.typeRetail
            : draft.type === "horeca"
              ? t.typeHoreca
              : draft.type === "other"
                ? t.typeOther
                : draft.type;
    const lines = [
      `Company: ${draft.company}`,
      `Name: ${draft.name}`,
      `Email: ${draft.email}`,
      `Country: ${draft.country}`,
      draft.type ? `Channel: ${typeLabel}` : "",
      chosen ? `Honeys: ${chosen}` : "",
      draft.message ? `Message:\n${draft.message}` : "",
    ].filter(Boolean);
    const subject = encodeURIComponent(`DANSK LYNG — ${draft.company}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setMailed(true);
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
        <button
          type="submit"
          className="min-h-11 bg-heath px-6 text-xs tracking-widest text-cream uppercase transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          {t.applySubmit}
        </button>
        {mailed ? <p className="text-sm text-ink-soft">{t.applyDoneBody}</p> : null}
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
