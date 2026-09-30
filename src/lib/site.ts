export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const venueSlugs = [
  "xian",
  "cristo-redentor",
  "zefira",
  "outros-lugares",
] as const;
export type VenueSlug = (typeof venueSlugs)[number];

export const site = {
  name: "Leco Biaggìoni",
  tagline: "Celebração com direção.",
  whatsapp: "5521982752040",
  whatsappDisplay: "+55 21 98275-2040",
  instagram: "https://www.instagram.com/lecobiagioni",
  instagramHandle: "@lecobiagioni",
  email: "contato@lecobiagioni.com",
  city: "Rio de Janeiro",
} as const;

export const brand = site;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromParam(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function localizedPath(locale: Locale, path = "") {
  const clean = path.replace(/^\/+/, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** Páginas internas: slug de cada página em cada idioma. */
export const pages = {
  elopement: { pt: "elopement-wedding", en: "elopement-wedding", es: "elopement-wedding" },
  sameSex: { pt: "casamento-homoafetivo", en: "same-sex-wedding", es: "boda-homoafectiva" },
  destination: { pt: "destination-wedding", en: "destination-wedding", es: "destination-wedding" },
  legal: { pt: "brazil-wedding-legal", en: "brazil-wedding-legal", es: "brazil-wedding-legal" },
  rio: { pt: "casamento-no-rio", en: "wedding-in-rio", es: "boda-en-rio" },
  about: { pt: "sobre-o-leco", en: "about-leco", es: "sobre-leco" },
  packages: { pt: "pacotes", en: "packages", es: "paquetes" },
} as const satisfies Record<string, Record<Locale, string>>;
export type PageKey = keyof typeof pages;

export function pagePath(locale: Locale, key: PageKey) {
  return localizedPath(locale, pages[key][locale]);
}

export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | undefined {
  return (Object.keys(pages) as PageKey[]).find((key) => pages[key][locale] === slug);
}

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
