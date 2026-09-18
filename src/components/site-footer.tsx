"use client";

import Link from "next/link";
import { SinceClock } from "@/components/since-clock";
import type { Dictionary } from "@/lib/dictionaries";
import { brand, localizedPath, type Locale } from "@/lib/site";
import { ui } from "@/lib/ui";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = ui[locale];
  const home = localizedPath(locale);

  return (
    <footer className="bg-cream pb-12 text-wine">
      <div className="hairline" />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-10 md:py-24">
        <div>
          <p className="text-[0.7rem] tracking-[0.18em] text-wine/50 uppercase">{copy.countdownLabel}</p>
          <div className="mt-4">
            <SinceClock copy={copy} compact />
          </div>
        </div>
        <div className="md:text-right">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">{copy.footerLine}</h2>
          <p className="mt-4 text-sm leading-7 text-wine/70">{copy.footerNote}</p>
          <Link href={`${home}#rsvp`} className="btn-wine mt-8">
            {copy.anchors.rsvp}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 pb-8 text-[0.72rem] text-wine/55 md:px-10">
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
