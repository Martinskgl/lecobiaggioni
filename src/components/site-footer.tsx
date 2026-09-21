import type { Dictionary } from "@/lib/dictionaries";
import { brand, type Locale } from "@/lib/site";

export function SiteFooter({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-cream pb-12 text-wine">
      <div className="hairline" />
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-10 text-[0.72rem] text-wine/55 md:px-10">
        <p className="font-display text-lg text-wine">{brand.name}</p>
        <div className="flex flex-wrap gap-5">
          <a href={brand.instagram} target="_blank" rel="noreferrer">
            {brand.instagramHandle}
          </a>
          <a href={`https://wa.me/${brand.whatsapp}`}>{brand.whatsappDisplay}</a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
        <p>{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
