import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EMAIL, products } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { localePath, stripLangPrefix } from "@/lib/locale";

export function SiteShell({ children }: { children: ReactNode }) {
  const t = useT();
  const { lang, setLang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const rest = stripLangPrefix(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const overHero = rest === "/" && !scrolled && !open;

  const links = [
    { to: "/products", label: t.navProducts },
    { to: "/heath", label: t.navHeath },
    { to: "/about", label: t.navAbout },
    { to: "/journal", label: t.navJournal },
    { to: "/contact", label: t.navContact },
  ] as const;

  return (
    <div className="min-h-dvh bg-parchment text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-heath focus:px-4 focus:py-2 focus:text-cream"
      >
        {t.skip}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200",
          overHero
            ? "border-transparent bg-transparent"
            : "border-ink/10 bg-parchment/85 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
          <Link
            to={localePath(lang, "/") as "/"}
            className={cn(
              "font-display text-xl tracking-wide sm:text-2xl",
              overHero ? "text-cream" : "text-ink",
            )}
            aria-label={t.wordmark}
          >
            Dansk Lyng
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-6 text-sm tracking-wide lg:flex",
              overHero ? "text-cream/80" : "text-ink-soft",
            )}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={localePath(lang, l.to) as "/"}
                className={cn(
                  "transition-colors",
                  overHero ? "hover:text-cream" : "hover:text-ink",
                  rest.startsWith(l.to) && (overHero ? "text-cream" : "text-ink"),
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-xs tracking-widest uppercase transition-colors",
                overHero ? "text-cream/80 hover:text-cream" : "text-ink-soft hover:text-ink",
              )}
              aria-label={t.langLabel}
            >
              {t.langSwitch}
            </button>
            <Link
              to={localePath(lang, "/partner") as "/"}
              className={cn(
                "hidden min-h-11 items-center px-4 text-xs tracking-widest uppercase transition-transform duration-150 ease-out active:scale-[0.96] sm:inline-flex",
                overHero ? "bg-cream text-ink" : "bg-heath text-cream",
              )}
            >
              {t.ctaForTrade}
            </Link>
            <button
              type="button"
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden",
                overHero ? "text-cream" : "text-ink",
              )}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.close : t.menu}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-ink/10 bg-parchment px-4 py-4 lg:hidden">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={localePath(lang, l.to) as "/"}
                  className="flex min-h-11 items-center text-base text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <Link to={localePath(lang, "/partner") as "/"} className="flex min-h-11 items-center text-base text-ink">
                {t.navPartner}
              </Link>
              <Link
                to={localePath(lang, "/products") as "/"}
                className="mt-2 flex min-h-11 items-center justify-center bg-heath text-sm tracking-widest text-cream uppercase"
              >
                {t.ctaCatalog}
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main id="main-content" className="pt-16 sm:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  const t = useT();
  const { lang } = useLang();
  return (
    <footer className="border-t border-ink/10 bg-heath text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">Dansk Lyng</p>
          <p className="mt-4 max-w-sm text-sm text-cream/70">{t.footerNature}</p>
          <p className="mt-8 font-display text-xl italic text-honey">{t.footerMotto}</p>
          <div className="mt-10 max-w-sm">
            <p className="text-xs tracking-widest text-cream/50 uppercase">{t.subscribeTitle}</p>
            <p className="mt-2 text-sm text-cream/70">{t.subscribeBody}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-flex min-h-11 items-center text-sm text-honey hover:text-cream"
            >
              {t.subscribeCta} →
            </a>
          </div>
        </div>
        <div className="grid gap-10 text-sm sm:grid-cols-3 md:col-span-7">
          <FooterCol
            title={t.footerProducts}
            items={[
              { to: localePath(lang, "/products"), label: t.ctaCatalog },
              { to: localePath(lang, "/products/lyng"), label: products.find((p) => p.featured)!.name[lang] },
              { to: localePath(lang, "/heath"), label: t.navHeath },
              { to: localePath(lang, "/faq"), label: "FAQ" },
            ]}
          />
          <FooterCol
            title={t.footerPartner}
            items={[
              { to: localePath(lang, "/partner"), label: t.navPartner },
              { to: localePath(lang, "/partner/apply"), label: t.ctaPartner },
              { to: localePath(lang, "/contact"), label: t.navContact },
            ]}
          />
          <FooterCol
            title={t.footerBrand}
            items={[
              { to: localePath(lang, "/about"), label: t.navAbout },
              { to: localePath(lang, "/journal"), label: t.navJournal },
              { to: localePath(lang, "/privacy"), label: t.footerPrivacy },
              { to: localePath(lang, "/terms"), label: t.footerTerms },
              { to: localePath(lang, "/cookies"), label: t.footerCookies },
            ]}
          />
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs tracking-widest text-cream/50 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 Dansk Lyng</span>
          <span>{t.footerTag}</span>
          <a href={`mailto:${EMAIL}`} className="text-cream/70 hover:text-cream">
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs tracking-widest text-cream/50 uppercase">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.to + item.label}>
            <Link to={item.to as "/"} className="text-cream/80 transition-colors hover:text-cream">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TextLink({
  to,
  children,
  tone = "ink",
}: {
  to: string;
  children: ReactNode;
  tone?: "ink" | "cream";
}) {
  const { lang } = useLang();
  return (
    <Link
      to={localePath(lang, to) as "/"}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 text-sm tracking-wide",
        tone === "ink" ? "text-ink hover:text-heather" : "text-cream hover:text-honey",
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function SolidLink({
  to,
  children,
  invert = false,
}: {
  to: string;
  children: ReactNode;
  invert?: boolean;
}) {
  const { lang } = useLang();
  return (
    <Link
      to={localePath(lang, to) as "/"}
      className={cn(
        "inline-flex min-h-11 items-center justify-center px-5 text-xs tracking-widest uppercase transition-transform duration-150 ease-out active:scale-[0.96]",
        invert ? "bg-parchment text-ink" : "bg-heath text-cream",
      )}
    >
      {children}
    </Link>
  );
}
