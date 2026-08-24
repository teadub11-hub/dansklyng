import { journal, products } from "./content";
import { LANGS, localePath } from "./locale";

export const STATIC_PATHS = [
  "/",
  "/about",
  "/products",
  "/journal",
  "/partner",
  "/partner/apply",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/cookies",
] as const;

export function unlocalizedPaths(): string[] {
  return [
    ...STATIC_PATHS,
    ...products.map((p) => `/products/${p.slug}`),
    ...journal.map((j) => `/journal/${j.slug}`),
  ];
}

export function allLocalizedPaths(): string[] {
  const paths = unlocalizedPaths();
  const out: string[] = [];
  for (const lang of LANGS) {
    for (const path of paths) {
      out.push(localePath(lang, path));
    }
  }
  return out;
}
