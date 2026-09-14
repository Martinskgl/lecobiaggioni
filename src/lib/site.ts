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

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
