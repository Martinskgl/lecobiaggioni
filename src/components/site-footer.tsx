import type { Dictionary } from "@/lib/dictionaries";
import { homeCopy } from "@/lib/home-copy";
import { brand, type Locale } from "@/lib/site";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = homeCopy[locale].footer;

  return (
    <footer className="bg-cream pb-12 text-wine">
      <div className="hairline" />
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-10 text-[0.78rem] text-wine/60 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-display text-lg text-wine">{copy.name}</p>
          <p className="mt-3 max-w-md leading-6">{copy.text}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end md:text-right">
          <p>{copy.city}</p>
          <p>{copy.languages}</p>
          <div className="flex flex-wrap gap-5">
            <a href={brand.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`}>WhatsApp</a>
            <a href={`mailto:${brand.email}`}>E-mail</a>
          </div>
          <div className="flex flex-wrap gap-5 text-wine/45">
            <span>{brand.instagramHandle}</span>
            <span>{brand.whatsappDisplay}</span>
            <span>{brand.email}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="max-w-4xl text-[0.68rem] leading-5 text-wine/45">{copy.legal}</p>
        <p className="mt-4 text-[0.72rem] text-wine/55">{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
