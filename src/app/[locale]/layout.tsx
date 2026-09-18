import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/html-lang";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappButton } from "@/components/whatsapp-button";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <HtmlLang locale={locale} />
      <SiteHeader locale={locale} dict={dict} />
      <main className="mx-auto w-full max-w-[1440px] flex-1 bg-cream shadow-[0_0_0_1px_rgba(84,39,46,0.04)]">
        {children}
      </main>
      <div className="mx-auto w-full max-w-[1440px] bg-cream">
        <SiteFooter locale={locale} dict={dict} />
      </div>
      <WhatsappButton label={dict.footer.whatsapp} />
    </div>
  );
}
