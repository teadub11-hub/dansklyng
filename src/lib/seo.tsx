import type { Lang } from "./content";
import { ui, type UiKey } from "./i18n";
import { htmlLang, localePath, parseLang } from "./locale";

/** Production origin, no trailing slash. Set VITE_SITE_ORIGIN at launch. */
export function siteOrigin(): string {
  const raw = (import.meta.env.VITE_SITE_ORIGIN as string | undefined)?.trim() ?? "";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path: string): string {
  const origin = siteOrigin();
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${normalised}` : normalised;
}

type SeoInput = {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

export function seoHead({ lang, path, title, description, image = "/og.jpg", type = "website" }: SeoInput) {
  const zh = absoluteUrl(localePath("zh", path));
  const en = absoluteUrl(localePath("en", path));
  const canonical = lang === "zh" ? zh : en;
  const ogImage = absoluteUrl(image);
  const ogLocale = lang === "zh" ? "zh_TW" : "en_GB";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: "DANSK LYNG" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: ogLocale },
      { property: "og:locale:alternate", content: lang === "zh" ? "en_GB" : "zh_TW" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "theme-color", content: "#3D4A3A" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "zh-Hant", href: zh },
      { rel: "alternate", hrefLang: "en", href: en },
      { rel: "alternate", hrefLang: "x-default", href: en },
    ],
  };
}

export function uiHead(lang: string | undefined, path: string, titleKey: UiKey, descKey: UiKey) {
  const l = parseLang(lang);
  return seoHead({
    lang: l,
    path,
    title: ui[l][titleKey],
    description: ui[l][descKey],
  });
}

export function organizationJsonLd() {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DANSK LYNG",
    url: origin || undefined,
    email: "hej@dansklyng.com",
    description: "Danish heather honey from the heathlands of West Jutland.",
    logo: origin ? `${origin}/favicon.svg` : undefined,
    areaServed: "DK",
  };
}

export function productJsonLd(input: {
  lang: Lang;
  name: string;
  description: string;
  image: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: absoluteUrl(input.image),
    brand: { "@type": "Brand", name: "DANSK LYNG" },
    countryOfOrigin: "DK",
    url: absoluteUrl(localePath(input.lang, `/products/${input.slug}`)),
  };
}

export function articleJsonLd(input: {
  lang: Lang;
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: input.image ? absoluteUrl(input.image) : undefined,
    datePublished: input.date,
    inLanguage: htmlLang(input.lang),
    author: { "@type": "Organization", name: "DANSK LYNG" },
    publisher: { "@type": "Organization", name: "DANSK LYNG" },
    url: absoluteUrl(localePath(input.lang, `/journal/${input.slug}`)),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
