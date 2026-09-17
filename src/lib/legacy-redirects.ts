import { redirect } from "@tanstack/react-router";
import { localePath, parseLang } from "./locale";

const PRODUCTS = new Set(["lyng", "blomster", "sensommer", "skov"]);

function productFromSearch(search: unknown) {
  if (typeof search === "string") {
    const q = search.startsWith("?") ? search.slice(1) : search;
    const product = new URLSearchParams(q).get("product") ?? "";
    return PRODUCTS.has(product) ? product : "";
  }
  if (search && typeof search === "object" && "product" in search) {
    const product = (search as { product?: unknown }).product;
    return typeof product === "string" && PRODUCTS.has(product) ? product : "";
  }
  return "";
}

/** Old Lovable shop URLs → current product pages. Always 301. */
export function redirectLegacyShop({
  lang,
  slug,
  search,
}: {
  lang?: string;
  slug?: string;
  search?: unknown;
}) {
  const l = parseLang(lang);
  const fromSlug = slug && PRODUCTS.has(slug) ? slug : "";
  const fromQuery = productFromSearch(search);
  const honey = fromSlug || fromQuery;
  throw redirect({
    href: localePath(l, honey ? `/products/${honey}` : "/products"),
    statusCode: 301,
  });
}

export function redirectLegacyInquiry(lang?: string) {
  throw redirect({ href: localePath(parseLang(lang), "/partner/apply"), statusCode: 301 });
}

export function redirectLegacyPartners(lang?: string) {
  throw redirect({ href: localePath(parseLang(lang), "/partner"), statusCode: 301 });
}
