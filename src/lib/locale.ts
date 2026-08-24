import { redirect } from "@tanstack/react-router";
import type { Lang } from "./content";

export const LANGS = ["zh", "en"] as const;
export const DEFAULT_LANG: Lang = "zh";
export const STORAGE_KEY = "dansk-lyng-lang";

export function isLang(value: string | undefined): value is Lang {
  return value === "zh" || value === "en";
}

export function parseLang(value: string | undefined): Lang {
  return isLang(value) ? value : DEFAULT_LANG;
}

export function htmlLang(lang: Lang): string {
  return lang === "zh" ? "zh-Hant" : "en";
}

export function localePath(lang: Lang, path = "/"): string {
  const suffix = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${suffix}`;
}

export function stripLangPrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(zh|en)(?=\/|$)/, "");
  return stripped || "/";
}

export function langFromPath(pathname: string): Lang | undefined {
  const m = pathname.match(/^\/(zh|en)(?=\/|$)/);
  return m && isLang(m[1]) ? m[1] : undefined;
}

export function preferredLang(): Lang {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY) ?? undefined;
    if (isLang(stored)) return stored;
  }
  return DEFAULT_LANG;
}

/** Redirect an unprefixed URL to the same path under /zh or /en. */
export function redirectPreservingPath({ location }: { location: { pathname: string } }) {
  throw redirect({ href: localePath(preferredLang(), location.pathname) });
}

export function redirectToLocalized(path: string) {
  return () => {
    throw redirect({ href: localePath(preferredLang(), path) });
  };
}
