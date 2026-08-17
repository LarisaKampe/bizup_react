import { useEffect } from "react";

export const SITE_URL = "https://bizup-react.netlify.app";
export const SITE_NAME = "BizUp";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/homescreen_11.png`;

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Manages per-page <title>, meta description, canonical URL, Open Graph /
 * Twitter tags, and JSON-LD structured data. Runs on the client only — this
 * is a static Vite/React SPA with no server-side rendering, so tags applied
 * here are visible to crawlers that execute JavaScript (e.g. Googlebot) but
 * NOT to crawlers that only read the initial HTML (most social-share link
 * unfurlers). The index.html fallback tags cover that case for the homepage.
 *
 * @param {string} title
 * @param {string} description
 * @param {string} path        - route path, e.g. "/about", used to build the canonical URL
 * @param {string} [ogImage]
 * @param {object|object[]} [schema] - JSON-LD object or array of objects
 */
export default function Seo({ title, description, path, ogImage, schema }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertLink("canonical", canonicalUrl);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    // JSON-LD structured data — remove any previous page's schema first
    document
      .querySelectorAll('script[data-seo="page-schema"]')
      .forEach((el) => el.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.seo = "page-schema";
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    return () => {
      document
        .querySelectorAll('script[data-seo="page-schema"]')
        .forEach((el) => el.remove());
    };
  }, [title, description, path, ogImage, schema]);

  return null;
}

/* ── JSON-LD builder helpers ──────────────────────────── */

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webPageSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
