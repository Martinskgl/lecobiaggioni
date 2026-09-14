import type { Metadata } from "next";
import { WeddedHome } from "@/components/wedded-home";
import { getDictionary, localeFromParam } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return <WeddedHome locale={localeFromParam(locale)} dict={dict} />;
}
