import { useState } from "react";
import { aromaFamilies, aromaNotes, type Lang } from "@/lib/content";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

export function AromaMap({ lang }: { lang: Lang }) {
  const t = useT();
  const [active, setActive] = useState<string | null>("bloom");
  const selected = aromaNotes.find((n) => n.id === active) ?? aromaNotes[0];
  const family = aromaFamilies.find((f) => f.id === selected.family);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label={t.aromaTitle}>
          <circle cx="200" cy="200" r="188" fill="none" stroke="currentColor" className="text-line" strokeWidth="1" />
          <circle cx="200" cy="200" r="92" fill="none" stroke="currentColor" className="text-line" strokeWidth="1" />
          {aromaNotes.map((note, i) => {
            const angle = (i / aromaNotes.length) * Math.PI * 2 - Math.PI / 2;
            const x = Number((200 + Math.cos(angle) * 148).toFixed(1));
            const y = Number((200 + Math.sin(angle) * 148).toFixed(1));
            const on = active === note.id;
            return (
              <g key={note.id}>
                <circle
                  cx={x}
                  cy={y}
                  r={on ? 11 : 8}
                  className={
                    note.present
                      ? on
                        ? "fill-honey"
                        : "fill-heather"
                      : on
                        ? "fill-ink-soft"
                        : "fill-fog"
                  }
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </g>
            );
          })}
          <text
            x="200"
            y="196"
            textAnchor="middle"
            className="fill-ink font-display"
            fontSize="22"
          >
            LYNG
          </text>
          <text x="200" y="218" textAnchor="middle" className="fill-muted" fontSize="11">
            {lang === "zh" ? "五項在罐中" : "HEATHER HONEY"}
          </text>
        </svg>
        <div className="pointer-events-none absolute inset-0">
          {aromaNotes.map((note, i) => {
            const angle = (i / aromaNotes.length) * Math.PI * 2 - Math.PI / 2;
            const x = Number((50 + Math.cos(angle) * 37).toFixed(2));
            const y = Number((50 + Math.sin(angle) * 37).toFixed(2));
            return (
              <button
                key={note.id}
                type="button"
                onClick={() => setActive(note.id)}
                className="pointer-events-auto absolute min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-pressed={active === note.id}
                aria-label={note.name[lang]}
              />
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-xs tracking-widest text-muted uppercase">
          {selected.present ? t.aromaPresent : t.aromaAbsent}
        </p>
        <h3 className="mt-2 font-display text-4xl text-ink">{selected.name[lang]}</h3>
        <p className="mt-2 text-sm text-ink-soft">{family?.name[lang]}</p>
        <ul className="mt-8 grid grid-cols-2 gap-2">
          {aromaNotes.map((note) => (
            <li key={note.id}>
              <button
                type="button"
                onClick={() => setActive(note.id)}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 px-3 text-left text-sm transition-colors",
                  active === note.id ? "bg-fog text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "size-2 shrink-0 rounded-full",
                    note.present ? "bg-heather" : "bg-line",
                  )}
                />
                {note.name[lang]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
