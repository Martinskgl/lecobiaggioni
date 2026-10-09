import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPage } from "@/components/inner-page";
import { pagesCopy } from "@/lib/pages-copy";
import { isLocale, locales, pageKeyFromSlug, pages, type Locale, type PageKey } from "@/lib/site";

export const dynamicParams = false;

/** Título da aba / Google de cada página interna, por idioma. */
const PAGE_TITLES: Record<PageKey, Record<Locale, string>> = {
  elopement: {
    pt: "Elopement Wedding no Rio de Janeiro",
    en: "Elopement Wedding in Rio de Janeiro",
    es: "Elopement Wedding en Río de Janeiro",
  },
  sameSex: {
    pt: "Casamento Homoafetivo no Rio de Janeiro",
    en: "Same-Sex Wedding in Rio de Janeiro",
    es: "Boda Homoafectiva en Río de Janeiro",
  },
  destination: {
    pt: "Destination Wedding no Rio de Janeiro",
    en: "Destination Wedding in Rio de Janeiro",
    es: "Destination Wedding en Río de Janeiro",
  },
  legal: {
    pt: "Brazil Legal Wedding — Casamento civil no Brasil",
    en: "Brazil Legal Wedding — Get Legally Married in Rio",
    es: "Brazil Legal Wedding — Matrimonio civil en Brasil",
  },
  rio: {
    pt: "Casamento no Rio de Janeiro",
    en: "Wedding in Rio de Janeiro",
    es: "Boda en Río de Janeiro",
  },
  about: {
    pt: "Conheça Leco Biaggìoni",
    en: "Meet Leco Biaggìoni",
    es: "Conozca a Leco Biaggìoni",
  },
  packages: {
    pt: "Pacotes de Elopement no Rio",
    en: "Elopement Packages in Rio",
    es: "Paquetes de Elopement en Río",
  },
};

type Params = { params: Promise<{ locale: string; page: string }> };

function resolve(locale: string, page: string) {
  if (!isLocale(locale)) return undefined;
  const key = pageKeyFromSlug(locale, page);
  const copy = key ? pagesCopy[key][locale] : undefined;
  return key && copy ? { locale, key, copy } : undefined;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    (Object.keys(pages) as PageKey[])
      .filter((key) => pagesCopy[key][locale])
      .map((key) => ({ locale, page: pages[key][locale] })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, page } = await params;
  const found = resolve(locale, page);
  if (!found) return {};
  return {
    title: `${PAGE_TITLES[found.key][found.locale]} | Leco Biaggìoni`,
    description: found.copy.hero.paragraphs[0],
  };
}

export default async function Page({ params }: Params) {
  const { locale, page } = await params;
  const found = resolve(locale, page);
  if (!found) notFound();
  return <InnerPage locale={found.locale} copy={found.copy} page={found.key} />;
}
