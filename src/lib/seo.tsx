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
      { name: "twitter:url", content: canonical },
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
    "@id": origin ? `${origin}/#organization` : undefined,
    name: "DANSK LYNG",
    url: origin || undefined,
    email: "hej@dansklyng.com",
    description: "Danish heather honey from the heathlands of West Jutland.",
    logo: origin ? `${origin}/favicon.svg` : undefined,
    areaServed: "DK",
  };
}

/**
 * Brand catalogue page markup for a B2B site that does not sell online.
 * Do not use schema.org Product here: Google treats it as a merchant listing
 * and requires offers, review or aggregateRating — none of which exist.
 */
export function itemPageJsonLd(input: {
  lang: Lang;
  name: string;
  description: string;
  image: string;
  slug: string;
  collectionLabel: string;
  siteName: string;
}) {
  const origin = siteOrigin();
  const pageUrl = absoluteUrl(localePath(input.lang, `/products/${input.slug}`));
  const homeUrl = absoluteUrl(localePath(input.lang, "/"));
  const collectionUrl = absoluteUrl(localePath(input.lang, "/products"));
  const orgId = origin ? `${origin}/#organization` : undefined;
  const image = absoluteUrl(input.image);
  const pageId = `${pageUrl}#webpage`;
  const entityId = `${pageUrl}#honey`;
  const crumbId = `${pageUrl}#breadcrumb`;
  const publisher = orgId ? { "@id": orgId } : { "@type": "Organization", name: "DANSK LYNG" };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": pageId,
        url: pageUrl,
        name: input.name,
        description: input.description,
        inLanguage: htmlLang(input.lang),
        isPartOf: {
          "@type": "WebSite",
          "@id": origin ? `${origin}/#website` : undefined,
          name: "DANSK LYNG",
          url: origin || undefined,
          publisher,
        },
        about: { "@id": entityId },
        mainEntity: { "@id": entityId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
        },
        publisher,
        breadcrumb: { "@id": crumbId },
      },
      {
        "@type": "Thing",
        "@id": entityId,
        name: input.name,
        description: input.description,
        image,
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": crumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: input.siteName, item: homeUrl },
          { "@type": "ListItem", position: 2, name: input.collectionLabel, item: collectionUrl },
          { "@type": "ListItem", position: 3, name: input.name, item: pageUrl },
        ],
      },
    ],
  };
}

export function articleJsonLd(input: {
  lang: Lang;
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  dateModified?: string;
}) {
  const pageUrl = absoluteUrl(localePath(input.lang, `/journal/${input.slug}`));
  const homeUrl = absoluteUrl(localePath(input.lang, "/"));
  const journalUrl = absoluteUrl(localePath(input.lang, "/journal"));
  const origin = siteOrigin();
  const orgId = origin ? `${origin}/#organization` : undefined;
  const publisher = orgId ? { "@id": orgId } : { "@type": "Organization", name: "DANSK LYNG" };
  const crumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: input.title,
        description: input.description,
        image: input.image ? absoluteUrl(input.image) : undefined,
        datePublished: input.date,
        dateModified: input.dateModified ?? input.date,
        inLanguage: htmlLang(input.lang),
        author: { "@type": "Organization", name: "DANSK LYNG" },
        publisher,
        url: pageUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        breadcrumb: { "@id": crumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": crumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui[input.lang].wordmark, item: homeUrl },
          { "@type": "ListItem", position: 2, name: ui[input.lang].navJournal, item: journalUrl },
          { "@type": "ListItem", position: 3, name: input.title, item: pageUrl },
        ],
      },
    ],
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
