import { notFound } from "next/navigation";
import { InnerPage } from "@/components/inner-page";
import { pagesCopy } from "@/lib/pages-copy";
import { isLocale, locales, pageKeyFromSlug, pages, type PageKey } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    (Object.keys(pages) as PageKey[])
      .filter((key) => pagesCopy[key][locale])
      .map((key) => ({ locale, page: pages[key][locale] })),
  );
}

export default async function Page({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page } = await params;
  if (!isLocale(locale)) notFound();
  const key = pageKeyFromSlug(locale, page);
  const copy = key ? pagesCopy[key][locale] : undefined;
  if (!copy) notFound();
  return <InnerPage locale={locale} copy={copy} />;
}
