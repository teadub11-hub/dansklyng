import { localePath } from "./locale";
import { absoluteUrl, siteOrigin } from "./seo";
import { unlocalizedPaths } from "./site-urls";

const AMP = "&" + "amp;";
const LT = "&" + "lt;";
const GT = "&" + "gt;";
const QUOT = "&" + "quot;";

function xmlEscape(value: string) {
  return value
    .replaceAll("&", AMP)
    .replaceAll("<", LT)
    .replaceAll(">", GT)
    .replaceAll('"', QUOT);
}

export function renderSitemap(): string {
  const urls = unlocalizedPaths()
    .map((path) => {
      const zh = xmlEscape(absoluteUrl(localePath("zh", path)));
      const en = xmlEscape(absoluteUrl(localePath("en", path)));
      return [
        "  <url>",
        `    <loc>${en}</loc>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${en}" />`,
        `    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${zh}" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />`,
        "  </url>",
        "  <url>",
        `    <loc>${zh}</loc>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${en}" />`,
        `    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${zh}" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

export function renderRobots(): string {
  const origin = siteOrigin();
  const sitemapLine = origin ? `Sitemap: ${origin}/sitemap.xml` : "Sitemap: /sitemap.xml";
  return ["User-agent: *", "Allow: /", "", sitemapLine, ""].join("\n");
}
